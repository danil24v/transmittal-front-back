/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "5hk6xziz1cx77is",
    "created": "2024-05-23 10:51:04.295Z",
    "updated": "2024-05-23 10:51:04.295Z",
    "name": "apars",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "vrvp1hga",
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
  const collection = dao.findCollectionByNameOrId("5hk6xziz1cx77is");

  return dao.deleteCollection(collection);
})
