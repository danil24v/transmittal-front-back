/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ut0v7htx64g9b3h")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "krq1igel",
    "name": "fmids",
    "type": "json",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 2000000
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ut0v7htx64g9b3h")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "krq1igel",
    "name": "fmids",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 2000000
    }
  }))

  return dao.saveCollection(collection)
})
