const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipe.controller');

router.get('/recipes', recipeController.getAll)
router.get('/recipes/:id', recipeController.getOne)
router.post('/recipes', recipeController.create)
router.put('/recipes/:id', recipeController.update)
router.delete('/recipes/:id', recipeController.delete)

module.exports = router;