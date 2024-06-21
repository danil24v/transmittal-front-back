/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ay7eud6dtwbw4pv")

  collection.listRule = "fmid != \"ABC\""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ay7eud6dtwbw4pv")

  collection.listRule = "@request.auth.username = 'dvandyuk3'"

  return dao.saveCollection(collection)
})
