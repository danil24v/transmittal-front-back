/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fvbnhsg8izn9kws")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "f9wfzmqr",
    "name": "request",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "ut0v7htx64g9b3h",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fvbnhsg8izn9kws")

  // remove
  collection.schema.removeField("f9wfzmqr")

  return dao.saveCollection(collection)
})
