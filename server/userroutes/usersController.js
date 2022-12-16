const users = require("./users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function login(req, res) {
  console.log("helloooo");
  try {
    const {
      body: { email, password },
    } = req;

    if (!email && !password) {
      return res.status(301).json({
        message: "Email or password required",
      });
    }

    const user = await users.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "Bad cred" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(400).json({ message: "Bad cred" });
    }

    const token = jwt.sign({ id: user["_id"] }, "SECRET");

    return res
      .status(200)
      .json({ name: user.name, email: user.email, token, id: user["_id"] });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}

const register = async (req, res) => {
  try {
    const {
      body: { name, email, password },
    } = req;

    if (!name && !email && !password) {
      return res.status(301).json({
        message: "Please fill all fields",
      });
    }

    const newpassword = await bcrypt.hash(password, 10);

    const user = new users({
      name,
      email,
      password: newpassword,
    });

    user.save();

    return res.status(200).json({ message: "User Saved" });
  } catch (error) {
    res.status(500).send(error);
  }
}
module.exports = { register, login };





