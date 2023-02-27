const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

//login
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(500).json("Wrong credentials!");
    const validated = await bcrypt.compare(req.body.password, user.password);
    !validated && res.status(400).json("Wrong credentials!");
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});

//register
router.post("/register", async (req, res) => {
  try {
    // const salt = await bcrypt.genSalt(10);
    // const hashedPass = await bcrypt.hash(req.body.password, salt);
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    const saved = newUser.save();
    res.status(200).json(`${saved} created`);
  } catch (err) {
    res.status(500).json(err);
  }
});
//get users
router.get("/users", (req, res) => {
  User.find({}, (docs, err) => {
    if (!err) {
      res.send(docs);
    } else {
      res.status(500).json(err);
    }
  });
});

module.exports = router;
