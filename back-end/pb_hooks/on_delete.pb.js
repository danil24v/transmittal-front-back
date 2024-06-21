onRecordBeforeDeleteRequest((e) => {
    console.log('--------------------------------')
    console.log('Delete trans request, id:', e.record.id)
    const transId = e.record.id
    const records = $app.dao().findRecordsByFilter(
        "apars",
        "trans ~ '"+transId+"' "              
    )

    console.log('Related apars', records.length)
    
    for (let i = 0; i < records.length; i++) {
        const aparRec = records[i]
        $app.dao().deleteRecord(aparRec) 
        console.log('Deleting apar', aparRec.id)
    }
    
    console.log('Related apars has been deleted!')

}, "transmittals")


onRecordBeforeDeleteRequest((e) => {
    console.log('--------------------------------')
    console.log('Delete prod request, id:', e.record.id)
    const prodId = e.record.id
    const records = $app.dao().findRecordsByFilter(
        "product_fields",
        "prod ~ '"+prodId+"' "              
    )

    console.log('Related prod fields', records.length)
    
    for (let i = 0; i < records.length; i++) {
        const fieldsRec = records[i]
        $app.dao().deleteRecord(fieldsRec) 
        console.log('Deleting prod fields', fieldsRec.id)
    }
    
    console.log('Related prod fields has been deleted!')

}, "products")
