const Recipe = require('../models/recipe.model');

const recipeController = {
    getAll: async (req, res) => {
        const recipes = await Recipe.find();
        res.send(recipes);
    },
    getOne: async (req, res) => {
        const { id } = req.params;
        const recipe = await Recipe.findById(id);
        res.send(recipe);
    }
}

module.exports = recipeController;