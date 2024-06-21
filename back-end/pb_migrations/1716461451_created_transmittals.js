/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "sgeuq5zr1hcbvb2",
    "created": "2024-05-23 10:50:51.446Z",
    "updated": "2024-05-23 10:50:51.446Z",
    "name": "transmittals",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "eboiwc2z",
        "name": "apar_number",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("sgeuq5zr1hcbvb2");

  return dao.deleteCollection(collection);
})
