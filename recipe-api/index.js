const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

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
    res.send('DELETE recipe');
})
// UPDATE recipe
app.put("/recipes/:id", (req, res) => {
    res.send("Update recipe");
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