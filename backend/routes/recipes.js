const express = require('express');
const router = express.Router();
const {
  createRecipe,
  getRecipes,
  getRecipeById,
  updateRecipe,
  deleteRecipe,
} = require('../controllers/recipeController');
const auth = require('../middleware/auth');

router.route('/').post(auth, createRecipe).get(getRecipes);

router
  .route('/:id')
  .get(getRecipeById)
  .put(auth, updateRecipe)
  .delete(auth, deleteRecipe);

module.exports = router;
