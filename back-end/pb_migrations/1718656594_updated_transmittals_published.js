/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9nqlfn0bnzb1x2i")

  collection.updateRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9nqlfn0bnzb1x2i")

  collection.updateRule = "@request.auth.role = \"admin\" || @request.auth.role != \"admin\""

  return dao.saveCollection(collection)
})
