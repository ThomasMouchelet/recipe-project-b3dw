const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipe.controller');

router.get('/recipes', (req, res) => {
    recipeController.getAll(req, res);
})
router.get('/recipes/:id', (req, res) => {
    recipeController.getOne(req, res);
})