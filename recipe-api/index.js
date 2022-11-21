const express = require('express');
const app = express();
require('dotenv').config()
const port = process.env.PORT || 8000;
const mongoose = require('mongoose');

try {
    const host = process.env.MONGO_HOST;
    const db_port = process.env.MONGO_PORT;
    const password = process.env.MONGO_INITDB_ROOT_PASSWORD;
    const username = process.env.MONGO_INITDB_ROOT_USERNAME;
    mongoose.connect(`mongodb://${username}:${password}@${host}:${db_port}`);
} catch (error) {
    console.log(error);
}

const Recipe = mongoose.model('Recipe', { title: String });

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
})

// CREATE recipe
app.post("/recipes", (req, res) => {
    const recipe = new Recipe({
        title: req.body.title,
    });
    
    recipe.save().then(() => {
        res.send(recipe);
    });
})
// DELETE recipe
app.delete('/recipes/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const recipe = await Recipe.findByIdAndDelete(id)
        res.send(recipe);
    } catch (error) {
        res.status(404).send({
            error: 'Recipe not found'
        })
    }

})
// UPDATE recipe
app.put("/recipes/:id", async (req, res) => {
    const { id } = req.params;
    const recipeBody = req.body;

    try {
        const newRecipe = await Recipe.findByIdAndUpdate(id, recipeBody, { new: true });
        res.send(newRecipe);
    } catch (error) {
        res.status(404).send({
            error: 'Recipe not found'
        })
    }
})
// GET ALL recipes
app.get('/recipes', async (req, res) => {
    const recipes = await Recipe.find();
    res.send(recipes);
})
// GET ONE recipe
app.get('/recipes/:id', async (req, res) => {
    const { id } = req.params;
    const recipe = await Recipe.findById(id);
    res.send(recipe);
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})