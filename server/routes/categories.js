const express = require('express');
const router = express.Router();

const {
  getCategories,
  createCategory,
} = require('../controllers/categoriesController');

// Get all categories
router.get('/', getCategories);

// Create category
router.post('/', createCategory);

module.exports = router;
