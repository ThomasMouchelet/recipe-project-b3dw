const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipe.controller');
const authMiddleware = require('../middleware/auth.middleware');

router.get('/recipes', recipeController.getAll, )
router.get('/recipes/:id', recipeController.getOne)
router.post('/recipes', authMiddleware,recipeController.create)
router.put('/recipes/:id', authMiddleware, recipeController.update)
router.delete('/recipes/:id', authMiddleware, recipeController.delete)

module.exports = router;