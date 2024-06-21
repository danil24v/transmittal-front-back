/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5hk6xziz1cx77is")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_3ODzlhr` ON `apars` (\n  `apar_number`,\n  `trans`\n)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5hk6xziz1cx77is")

  collection.indexes = []

  return dao.saveCollection(collection)
})
