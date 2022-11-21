const express = require('express');
const app = express();
require('dotenv').config()
const port = process.env.PORT || 8000;
const connectMongo = require('./config/mongo.config');
const categoryRouter = require('./src/routers/category.router');
const recipeRouter = require('./src/routers/recipe.router');

connectMongo()

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.use(recipeRouter)
app.use(categoryRouter)

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})