/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sgeuq5zr1hcbvb2")

  collection.listRule = ""
  collection.createRule = "@request.auth.role = \"admin\" || (@request.auth.permissions:each ?~ prod.fmid)"
  collection.updateRule = "@request.auth.role = \"admin\" || (@request.auth.permissions:each ?~ prod.fmid)"
  collection.deleteRule = "@request.auth.role = \"admin\" || (@request.auth.permissions:each ?~ prod.fmid)"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sgeuq5zr1hcbvb2")

  collection.listRule = null
  collection.createRule = ""
  collection.updateRule = "@request.auth.permissions ~ prod.fmid || @request.auth.role = 'admin'"
  collection.deleteRule = "@request.auth.permissions ~ prod.fmid || @request.auth.role = 'admin'"

  return dao.saveCollection(collection)
})
