const router = require("express").Router();
const Comment = require("../models/Comment");

//get comments
router.get("/", (req, res) => {
  Comment.find({}, (err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      res.status(500).json(err);
    }
  });
});

//add comment
router.post("/", async (req, res) => {
  let comment = req.body;
  try {
    await Comment.create(comment);
    res.status(200).json("Comment added");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
