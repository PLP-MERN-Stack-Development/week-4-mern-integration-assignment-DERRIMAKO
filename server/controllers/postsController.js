// postsController.js

const Post = require('../models/post');

// @desc    Get all posts
// @route   GET /api/posts
exports.getPosts = async (req, res, next) => {
  try {
    const posts = await Post.find().populate('category').populate('author');
    res.status(200).json(posts);
  } catch (err) {
    next(err);
  }
};

// @desc    Get single post by ID
// @route   GET /api/posts/:id
exports.getPostById = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id).populate('category').populate('author');
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.status(200).json(post);
  } catch (err) {
    next(err);
  }
};

// @desc    Create new post
// @route   POST /api/posts
exports.createPost = async (req, res, next) => {
  try {
    const { title, content, author, category } = req.body;

    const newPost = new Post({
      title,
      content,
      author,
      category,
    });

    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (err) {
    next(err);
  }
};
