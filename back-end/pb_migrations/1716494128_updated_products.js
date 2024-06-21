/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ay7eud6dtwbw4pv")

  collection.viewRule = "@request.auth.role = \"admin\" || (@request.auth.permissions:each ?~ fmid)"
  collection.createRule = "@request.auth.role = \"admin\""
  collection.updateRule = "@request.auth.role = \"admin\""
  collection.deleteRule = "@request.auth.role = \"admin\""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ay7eud6dtwbw4pv")

  collection.viewRule = "@request.auth.role = \"admin\""
  collection.createRule = null
  collection.updateRule = null
  collection.deleteRule = null

  return dao.saveCollection(collection)
})
