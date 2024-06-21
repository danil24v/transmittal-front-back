/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9nqlfn0bnzb1x2i")

  collection.listRule = "@request.auth.role = \"admin\" || @request.auth.role != \"admin\""
  collection.viewRule = "@request.auth.role = \"admin\" || @request.auth.role != \"admin\""
  collection.createRule = "@request.auth.role = \"admin\" || @request.auth.role != \"admin\""
  collection.updateRule = "@request.auth.role = \"admin\" || @request.auth.role != \"admin\""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9nqlfn0bnzb1x2i")

  collection.listRule = null
  collection.viewRule = null
  collection.createRule = null
  collection.updateRule = null

  return dao.saveCollection(collection)
})
