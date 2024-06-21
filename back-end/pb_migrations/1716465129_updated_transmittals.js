/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sgeuq5zr1hcbvb2")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_c1F39Qv` ON `transmittals` (\n  `apar_number`,\n  `prod`\n)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sgeuq5zr1hcbvb2")

  collection.indexes = []

  return dao.saveCollection(collection)
})
