const { Posts } = require("../models");

const createPost = async (req, res) => {
  const post = req.body;
  await Posts.create(post);
  res.status(200).json({ message: "Post created successfully" }, post);
};

module.exports = { createPost };
