const express = require("express");
const app = express();

//database
const db = require("./models");

//routers
const postRouter = require("./routes/Posts");
app.use("/posts", postRouter);

//api request
db.sequelize.sync().then(() => {
  app.listen(5000, () => {
    console.log("Hello World");
  });
});
