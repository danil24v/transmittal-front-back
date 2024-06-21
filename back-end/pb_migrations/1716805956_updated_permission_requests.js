/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ut0v7htx64g9b3h")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_ve8eEid` ON `permission_requests` (\n  `user`,\n  `add_users`,\n  `fmids`\n)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ut0v7htx64g9b3h")

  collection.indexes = [
    "CREATE INDEX `idx_ve8eEid` ON `permission_requests` (\n  `user`,\n  `add_users`,\n  `fmids`\n)"
  ]

  return dao.saveCollection(collection)
})
