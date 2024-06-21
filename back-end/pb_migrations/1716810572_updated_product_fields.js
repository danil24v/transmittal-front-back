/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cyisshr02kv7loc")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "7a9ierf9",
    "name": "fields",
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
  const collection = dao.findCollectionByNameOrId("cyisshr02kv7loc")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "7a9ierf9",
    "name": "fields",
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
