onModelAfterCreate((e) => {
    console.log('----------NEW PERMISSION HOOK----------')
    console.log(e.model.tableName())
    console.log(e.model.id)
    const json = JSON.stringify(e.model)
    const objAccepted = JSON.parse(json);
    console.log(json)

    let userRecords = []   //List with checked user IDs
    let prodFmids = []  //List with checked prod FMIDs

    objAccepted.users_list.forEach((username) => {
        try{
            const userRecord = $app.dao().findAuthRecordByUsername("users", username)
            userRecords.push(userRecord)
            console.log('#######################')
            console.log(username, ':', JSON.stringify(userRecord))
        }
        catch(error)
        {
            console.log('Error while fetching user', username, error)
        }
    })

    objAccepted.fmids_list.forEach((fmid) => {
        try{
            const prodRecord = $app.dao().findFirstRecordByFilter("products",
                 "fmid = '"+ fmid + "'")
            prodFmids.push(fmid)
            console.log(fmid, ':', JSON.stringify(prodRecord))

        } 
        catch(error)
        {
            console.log('Error while fetching fmid', fmid, error)
        }
    })

    userRecords.forEach((userRec) => {
        const jsonTmp = JSON.stringify(userRec)
        const objUser = JSON.parse(jsonTmp);
        console.log('Updating permissions for ID:', objUser.username)
        console.log('current perms:', objUser.permissions)
        let toAddFmids = []
        prodFmids.forEach((fmid) => {
            if(objUser.permissions.indexOf(fmid) == -1)
                toAddFmids.push(fmid)
        })

        const form = new RecordUpsertForm($app, userRec)
        form.loadData({
            "permissions":          [...objUser.permissions, ...toAddFmids]
        })

        form.submit();

        console.log('Permissions has ben updated!')

        if(toAddFmids.length > 0){
            const userEmail = objUser.username + '@rocketsoftware.com'
            const message = new MailerMessage({
                from: {
                    address: $app.settings().meta.senderAddress,
                    name:    $app.settings().meta.senderName,
                },
                to:      [{address: userEmail}],
                subject: "Transmittal Builder: permissions request accepted!",
                html:    "You received permissions for following products: " + JSON.stringify(toAddFmids),
            })
            $app.newMailClient().send(message)
            console.log('Email was sent!')
        } else console.log('Email was skipped.')
    })

    const origRequest = $app.dao().findRecordById("permission_requests", objAccepted.request)
    $app.dao().deleteRecord(origRequest)

    console.log('Original request record deleted!')

    const accRequest = $app.dao().findRecordById("permission_accepted", objAccepted.id)
    $app.dao().deleteRecord(accRequest)

    console.log('Accepted request record deleted!')

    console.log('------------------------------------')

}, "permission_accepted")