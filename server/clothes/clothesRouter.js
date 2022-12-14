var clothesRouter = require("express").Router();
var clothescontroller = require("./clothesController");
const authMiddelware = require("../middleware/middleware");

clothesRouter.get("/", clothescontroller.getAll);
clothesRouter.get("/:id", clothescontroller.getOne);

clothesRouter.post("/", authMiddelware,clothescontroller.createOne);
clothesRouter.delete("/:id", authMiddelware, clothescontroller.deleteOne);
clothesRouter.put("/:id", authMiddelware,clothescontroller.updateOne);

module.exports = clothesRouter;
