/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sgeuq5zr1hcbvb2")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "eboiwc2z",
    "name": "apar_number",
    "type": "text",
    "required": false,
    "presentable": true,
    "unique": false,
    "options": {
      "min": 7,
      "max": 7,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sgeuq5zr1hcbvb2")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "eboiwc2z",
    "name": "apar_number",
    "type": "text",
    "required": false,
    "presentable": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
