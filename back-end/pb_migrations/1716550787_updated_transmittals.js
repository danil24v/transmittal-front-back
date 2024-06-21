/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sgeuq5zr1hcbvb2")

  collection.listRule = "@request.auth.role = \"admin\" || (@request.auth.permissions:each ?~ prod.fmid)"
  collection.viewRule = "@request.auth.role = \"admin\" || (@request.auth.permissions:each ?~ prod.fmid)"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sgeuq5zr1hcbvb2")

  collection.listRule = ""
  collection.viewRule = ""

  return dao.saveCollection(collection)
})
