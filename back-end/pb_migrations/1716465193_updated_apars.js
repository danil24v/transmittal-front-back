/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5hk6xziz1cx77is")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kvfiauxc",
    "name": "closing_text",
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
  collection.schema.removeField("kvfiauxc")

  return dao.saveCollection(collection)
})
