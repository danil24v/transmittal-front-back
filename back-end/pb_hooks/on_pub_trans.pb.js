onModelAfterCreate((e) => {
    console.log('----------TRANS PUBLISH HOOK----------')
    console.log(e.model.tableName())
    console.log(e.model.id)
    const json = JSON.stringify(e.model)
    const objPublish = JSON.parse(json);
    //console.log(json)
    console.log('JIRA_TICKET:' + objPublish.jira_ticket)


    const pubRec = $app.dao().findRecordById("transmittals_published", objPublish.id)
    pubRec.set("published", true)
    $app.dao().saveRecord(pubRec)

    //const accRequest = $app.dao().findRecordById("permission_accepted", objAccepted.id)
    //$app.dao().deleteRecord(accRequest)

    console.log('Transmittal published!')

    

    console.log('------------------------------------')

}, "transmittals_published")