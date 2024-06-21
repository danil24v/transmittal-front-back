/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "fvbnhsg8izn9kws",
    "created": "2024-06-14 21:21:16.152Z",
    "updated": "2024-06-14 21:21:16.152Z",
    "name": "permission_accepted",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ulcpvxxq",
        "name": "users_list",
        "type": "json",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSize": 2000000
        }
      },
      {
        "system": false,
        "id": "mlhr43fm",
        "name": "fmids_list",
        "type": "json",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSize": 2000000
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
  const collection = dao.findCollectionByNameOrId("fvbnhsg8izn9kws");

  return dao.deleteCollection(collection);
})
