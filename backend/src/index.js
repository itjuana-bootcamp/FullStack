const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const postsRouter = require("./routes/posts");

const app = express();
const PORT = 4000;

app.use(express.json());
app.use(cors())
app.use("/posts", postsRouter);

app.use((error, req, res, next) => {
  console.error(error.stack);
  res.status(500).json({ message: error.message });
});

const connectDb = () => {
  try {
    mongoose.connect(process.env.DB_URI);
    console.log("Database connected");
  } catch (error) {
    console.error(error);
  }
};

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
  connectDb();
});
