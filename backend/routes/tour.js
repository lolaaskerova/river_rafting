const router = require("express").Router();
const Tour = require("../models/Tour");

//get tours
router.get("/", (req, res) => {
  Tour.find({}, (err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      res.status(500).json(err);
    }
  });
});

//get tour by id
router.get("/:id", (req, res) => {
  const { id } = req.params;
  Tour.findById(id, (err, docs) => {
    if (!err) {
      if (docs) {
        res.status(200);
        res.send(docs);
      } else {
        res.status(404).json("not found");
      }
    } else {
      res.status(500).json(err);
    }
  });
});
// add tour
router.post("/", async (req, res) => {
  let tour = req.body;
  try {
    await Tour.create(tour);
    res.status(200).json("Tour added");
  } catch (err) {
    res.status(500).json(err);
  }
});

//delete tour
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  Tour.findByIdAndDelete(id, (err) => {
    if (!err) {
      res.send("Tour deleted");
    } else {
      res.status(500).json(err);
    }
  });
});

//update tour
router.put("/:id", (req, res) => {
  const { id } = req.params;
  Tour.findByIdAndUpdate(id, req.body, (docs, err) => {
    if (!err) {
      res.status(201);
    } else {
      res.status(500).json(err);
    }
  });
  res.send("Tour updated");
});

module.exports = router;
