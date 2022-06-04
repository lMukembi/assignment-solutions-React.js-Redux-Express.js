const mongoose = require("mongoose");
const post = require("../models/post");

exports.getPosts = async (req, res) => {
  try {
    const posts = await post.find({});

    return res.status(200).json(posts);
  } catch (error) {
    res.status(404).json({ message: "Could not fetch the posts please!" });
  }
};

exports.getPost = async (req, res) => {
  try {
    const Post = await post.findOne({ _id: req.params.id });

    res.status(200).json(Post);
  } catch (error) {
    res.status(404).json({ message: "Could not fetch the post please!" });
  }
};

exports.deletePost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`This post id "${id}" is unavailable.`);

  await post.findByIdAndRemove(id);

  res.json({ message: "Post deleted successfully." });
};
