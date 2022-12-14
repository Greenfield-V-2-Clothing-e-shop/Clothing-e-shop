const users = require("../userroutes/users");
const jwt = require("jsonwebtoken");

var authMiddelware = async function (req, res, next) {

  const {
    headers: { auth },
  } = req;

  if (!auth) {
    return res.status(400).json({
      message: "unauthorized",
    });
  }

  const decodedToken = await jwt.decode(auth);

  if (!decodedToken) {
    return res.status(400).json({
      message: "unauthorized",
    });
  }

  const user = await users.findById(decodedToken.id);

  if (!user) {
    return res.status(400).json({
      message: "unauthorized",
    });
  }

  req.user = user;

  next();
};

module.exports = authMiddelware;