const postModel = require("../models/postModel");

const getPosts = async (req, res) => {
  const posts = await postModel.find();
  res.status(200).json(posts);
};

const getPost = async (req, res) => {
  const post = await postModel.findOne({ slug: req.params.slug });
  res.status(200).json(post);
};

const createPost = async (req, res) => {
  const newPost = new postModel(req.body);

  const post = await newPost.save();
  res.status(200).json(post);
};

const deletePost = async (req, res) => {
  const newPost = new postModel(req.body);

  const post = await postModel.findByIdAndDelete(req.params.id);
  res.status(200).json("post deleted successfully");
};

module.exports = {
  getPosts,
  getPost,
  createPost,
  deletePost,
};
