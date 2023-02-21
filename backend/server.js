const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");

dotenv.config();

//require tour route
const tourRoute = require("./routes/tour");
//require  comment route
const commentRoute = require("./routes/comment");
//require auth route
const authRoute = require("./routes/auth");

const app = express();
app.use(cors());
app.use(bodyParser.json());
mongoose.set("strictQuery", false);

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "images");
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + path.extname(file.originalname));
//   },
// });
// const upload = multer({ storage: storage });

const PORT = process.env.PORT;
const URL = process.env.DB_URL.replace("<password>", process.env.PASSWORD);

mongoose.connect(URL, (err) => {
  if (!err) {
    console.log("DB CONNECTED");
  }
});

//tour use
app.use("/tour", tourRoute);
//comment use
app.use("/comment", commentRoute);
app.use("/auth", authRoute);

app.listen(PORT, () => {
  console.log(`the server is up and running on the port ${PORT}`);
});
