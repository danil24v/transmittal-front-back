/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sgeuq5zr1hcbvb2")

  collection.viewRule = "@request.auth.permissions ~ prod.fmid || @request.auth.role = 'admin'"
  collection.createRule = "@request.auth.permissions ~ prod.fmid"
  collection.updateRule = "@request.auth.permissions ~ prod.fmid"
  collection.deleteRule = "@request.auth.permissions ~ prod.fmid"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sgeuq5zr1hcbvb2")

  collection.viewRule = null
  collection.createRule = "@collection.users.permissions ~ prod.fmid"
  collection.updateRule = null
  collection.deleteRule = null

  return dao.saveCollection(collection)
})
