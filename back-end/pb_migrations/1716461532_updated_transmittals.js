/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sgeuq5zr1hcbvb2")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cxve00ey",
    "name": "prod",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "ay7eud6dtwbw4pv",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sgeuq5zr1hcbvb2")

  // remove
  collection.schema.removeField("cxve00ey")

  return dao.saveCollection(collection)
})
