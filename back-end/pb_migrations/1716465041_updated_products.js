/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ay7eud6dtwbw4pv")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "4gqzjcmm",
    "name": "type",
    "type": "text",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 3,
      "max": 6,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ay7eud6dtwbw4pv")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "4gqzjcmm",
    "name": "type",
    "type": "text",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 3,
      "max": 6,
      "pattern": "^[A-Z]$"
    }
  }))

  return dao.saveCollection(collection)
})
