var router = require('express').Router();
const {register,login} = require("./usersController")

router.post("/login",login)
router.post("/register",register)




module.exports = router;