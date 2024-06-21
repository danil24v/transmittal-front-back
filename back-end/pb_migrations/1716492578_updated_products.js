/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ay7eud6dtwbw4pv")

  collection.listRule = "(id = @collection.users.permissions_via_user.prod.id) || (@request.auth.role = 'admin')"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ay7eud6dtwbw4pv")

  collection.listRule = "id = @collection.users.permissions_via_user.prod.id"

  return dao.saveCollection(collection)
})
