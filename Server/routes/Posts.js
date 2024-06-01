const express = require("express");
const router = express.Router();
const { createPost } = require("../controllers/Posts");

router.post("/", createPost);
module.exports = router;
