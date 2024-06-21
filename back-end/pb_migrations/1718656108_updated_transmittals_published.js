/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9nqlfn0bnzb1x2i")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xny8yymp",
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
  const collection = dao.findCollectionByNameOrId("9nqlfn0bnzb1x2i")

  // remove
  collection.schema.removeField("xny8yymp")

  return dao.saveCollection(collection)
})
