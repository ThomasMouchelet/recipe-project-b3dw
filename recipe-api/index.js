const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const mongoose = require('mongoose');

let recipes = [
    {
        id: 1,
        title: 'Pancakes',
    },
    {
        id: 2,
        title: 'Spaghetti',
    },
]

mongoose.connect('mongodb://mongoroot:mongoroot@localhost:27017');

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
})

// CREATE recipe
app.post("/recipes", (req, res) => {
    const recipe = req.body;
    recipe.id = recipes.length + 1;
    recipes.push(recipe);
    res.send(recipe);
})
// DELETE recipe
app.delete('/recipes/:id', (req, res) => {
    const { id } = req.params;
    recipes = recipes.filter(recipe => recipe.id !== Number(id));
    res.send(recipes);
})
// UPDATE recipe
app.put("/recipes/:id", (req, res) => {
    const { id } = req.params;
    const recipe = req.body;
    const recipeIndex = recipes.findIndex(recipe => recipe.id === Number(id));
    recipes[recipeIndex] = {
        ...recipes[recipeIndex],
        ...recipe
    };
    res.send(recipes[recipeIndex]);
})
// GET ALL recipes
app.get('/recipes', (req, res) => {
    res.send(recipes);
})
// GET ONE recipe
app.get('/recipes/:id', (req, res) => {
    const { id } = req.params;
    const recipe = recipes.find(recipe => recipe.id === parseInt(id));
    res.send(recipe);
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})