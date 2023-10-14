const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());
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
