const express = require('express');
const router = express.Router();

const {
  getPosts,
  getPostById,
  createPost,
} = require('../controllers/postsController');

// Get all posts
router.get('/', getPosts);

// Get single post
router.get('/:id', getPostById);

// Create post
router.post('/', createPost);

module.exports = router;
