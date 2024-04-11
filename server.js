const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

//Creating an express app
const app = express();

// Configure middleware functions
app.use(express.json({ limit: "100mb" }));
app.use(express.urlencoded({ limit: "100mb", extended: true }));
app.use(cors());

// Get port number and database URI from environment variables
const PORT = process.env.PORT;
const URI = process.env.URI;

// Connect to MongoDB database and start server
mongoose
  .connect(URI)
  .then(() => {
    console.log("Connection to MongoDB successful");
    app.listen(PORT, () => {
      console.log(`Server is running on ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err.message);
  });

const userRouter = require("./routes/user");
const postRouter = require("./routes/post");
const commentRouter = require("./routes/comment");
const likeRouter = require("./routes/like");

// Set up route for handling requests to /api/user endpoint
app.use("/api/users", userRouter);

// Set up route for handling requests to /api/user endpoint
app.use("/api/posts", postRouter);

/*                                Extra Routes                                */
/* -------------------------------------------------------------------------- */

/* -------- Set up route for handling requests to /api/user endpoint -------- */
app.use("/api/comments", commentRouter);

app.use("/api/likes", likeRouter);

module.exports = app;
