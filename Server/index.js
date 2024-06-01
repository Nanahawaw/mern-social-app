const express = require("express");
const postRouter = require("./routes/Posts");

const app = express();
const db = require("./models");

//routes
app.use("/posts", postRouter);

db.sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });
});
