/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ay7eud6dtwbw4pv")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "o9ptpkbt",
    "name": "fmid",
    "type": "text",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 3,
      "max": 8,
      "pattern": "^[A-Z0-9]$"
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ay7eud6dtwbw4pv")

  // remove
  collection.schema.removeField("o9ptpkbt")

  return dao.saveCollection(collection)
})
