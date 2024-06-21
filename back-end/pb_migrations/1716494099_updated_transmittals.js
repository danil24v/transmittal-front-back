/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sgeuq5zr1hcbvb2")

  collection.viewRule = ""
  collection.createRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sgeuq5zr1hcbvb2")

  collection.viewRule = "@request.auth.permissions ~ prod.fmid || @request.auth.role = 'admin'"
  collection.createRule = "@request.auth.permissions ~ prod.fmid || @request.auth.role = 'admin'"

  return dao.saveCollection(collection)
})
