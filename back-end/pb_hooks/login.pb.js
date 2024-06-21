onRecordBeforeAuthWithPasswordRequest((e) => {
    console.log('--------------------------------------')
    console.log(e.httpContext)
    console.log(e.record) // could be null
    console.log(e.identity)
    console.log(e.password)
    console.log('[DBG] Custom login hook!')
    var userRecord = null
    try{
        userRecord = $app.dao().findAuthRecordByUsername("users", e.identity)
    } catch (error) {
        console.log(error);
    }
    console.log('RecordRequested')
    if(userRecord){
        console.log('Identity exists!')
    }
    else
    {
        console.log('Request from new identity.')
        try{
            const users = $app.dao().findCollectionByNameOrId("users")
            const record = new Record(users)
            const form = new RecordUpsertForm($app, record)
            const pwdTmp = "japierdolekurwabobr1!"
            form.loadData({
                "username": e.identity,
                "password": pwdTmp,
                "passwordConfirm": pwdTmp,
                "role": "user"
            })
            form.submit()
            console.log('New user', e.identity, 'created!')
        } catch (error) {
            console.log('New rec error', error);
        }
    }
})