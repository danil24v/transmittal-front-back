/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cyisshr02kv7loc")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_03sv37d` ON `product_fields` (`prod`)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cyisshr02kv7loc")

  collection.indexes = []

  return dao.saveCollection(collection)
})
