var carRouter = require("express").Router();
var carController = require("./carController");

carRouter.get("/", carController.getAll);
carRouter.get("/:id", carController.getOne);

carRouter.post("/",  carController.createOne);
carRouter.delete("/:id",  carController.deleteOne);
carRouter.put("/:id",  carController.updateOne);

module.exports = carRouter;
