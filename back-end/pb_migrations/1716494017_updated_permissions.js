/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ut0v7htx64g9b3h")

  collection.name = "permission_requests"

  // remove
  collection.schema.removeField("k1e26i8o")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mmsa7xek",
    "name": "add_users",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 2000000
    }
  }))

  // add
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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ut0v7htx64g9b3h")

  collection.name = "permissions"

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "k1e26i8o",
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

  // remove
  collection.schema.removeField("mmsa7xek")

  // remove
  collection.schema.removeField("krq1igel")

  return dao.saveCollection(collection)
})
