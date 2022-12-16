var clothesRouter = require("express").Router();
var clothescontroller = require("./clothesController");
const authMiddelware = require("../middleware/middleware");

clothesRouter.get("/", clothescontroller.getAll);
clothesRouter.get("/:id", clothescontroller.getOne);
//should  clothesRouter.post("/",authMiddelware,clothescontroller.createOne)
clothesRouter.post("/", clothescontroller.createOne);
clothesRouter.delete("/:id", clothescontroller.deleteOne);
clothesRouter.put("/:id", authMiddelware,clothescontroller.updateOne);

module.exports = clothesRouter;
