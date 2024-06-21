/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5hk6xziz1cx77is")

  collection.listRule = "@request.auth.role = \"admin\" || (@request.auth.permissions:each ?~ trans.prod.fmid)"
  collection.viewRule = "@request.auth.role = \"admin\" || (@request.auth.permissions:each ?~ trans.prod.fmid)"
  collection.createRule = "@request.auth.role = \"admin\" || (@request.auth.permissions:each ?~ trans.prod.fmid)"
  collection.updateRule = "@request.auth.role = \"admin\" || (@request.auth.permissions:each ?~ trans.prod.fmid)"
  collection.deleteRule = "@request.auth.role = \"admin\" || (@request.auth.permissions:each ?~ trans.prod.fmid)"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5hk6xziz1cx77is")

  collection.listRule = null
  collection.viewRule = null
  collection.createRule = null
  collection.updateRule = null
  collection.deleteRule = null

  return dao.saveCollection(collection)
})
