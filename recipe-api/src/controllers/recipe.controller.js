const Recipe = require('../models/recipe.model');

const recipeController = {
    getAll: async (req, res) => {
        const recipes = await Recipe.find().populate('category');
        res.send(recipes);
    },
    getOne: async (req, res) => {
        const { id } = req.params;
        try {
            const recipe = await Recipe.findById(id);
            res.send(recipe);
        } catch (error) {
            res.status(404).send({ message: 'Recipe not found' });
        }
    },
    create: async (req, res) => {
        try {
            const recipe = await Recipe.create(req.body);
            Category.findByIdAndUpdate(recipe.category, { $push: { recipes: recipe._id } });
            // const category = await Category.findById(recipe.category);
            // category.recipes.push(recipe._id);
            // await category.save();
            
            res.send(recipe);
        } catch (error) {
            res.status(400).send({ message: 'Invalid recipe data' });
        }
    },
    update: async (req, res) => {
        const { id } = req.params;
        try {
            const recipe = await Recipe.findByIdAndUpdate(id, req.body)
            res.send(recipe);
        } catch (error) {
            res.status(400).send({ message: 'Invalid recipe data' });
        }
    },
    delete: async (req, res) => {
        const { id } = req.params;
        try {
            const recipe = await Recipe.findByIdAndDelete(id);
            res.send(recipe);
        } catch (error) {
            res.status(404).send({ message: 'Recipe not found' });
        }
    }
}

module.exports = recipeController;