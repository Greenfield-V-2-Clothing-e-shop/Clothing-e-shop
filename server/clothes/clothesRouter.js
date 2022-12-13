var clothesRouter = require("express").Router();
var clothescontroller = require("./clothesController");

clothesRouter.get("/", clothescontroller.getAll);
clothesRouter.get("/:id", clothescontroller.getOne);

clothesRouter.post("/",  clothescontroller.createOne);
clothesRouter.delete("/:id",  clothescontroller.deleteOne);
clothesRouter.put("/:id",  clothescontroller.updateOne);

module.exports = clothesRouter;
