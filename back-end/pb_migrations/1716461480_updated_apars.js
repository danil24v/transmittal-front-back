/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5hk6xziz1cx77is")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hmgjiyao",
    "name": "field",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "sgeuq5zr1hcbvb2",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5hk6xziz1cx77is")

  // remove
  collection.schema.removeField("hmgjiyao")

  return dao.saveCollection(collection)
})
