/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5hk6xziz1cx77is")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "obhdc1r9",
    "name": "checkboxes",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 2000000
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5hk6xziz1cx77is")

  // remove
  collection.schema.removeField("obhdc1r9")

  return dao.saveCollection(collection)
})
