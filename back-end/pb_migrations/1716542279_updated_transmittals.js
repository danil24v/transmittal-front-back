/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sgeuq5zr1hcbvb2")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wlyqk6a8",
    "name": "jira_ticket",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sgeuq5zr1hcbvb2")

  // remove
  collection.schema.removeField("wlyqk6a8")

  return dao.saveCollection(collection)
})
