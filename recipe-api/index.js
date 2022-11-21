const express = require('express');
const app = express();
require('dotenv').config()
const port = process.env.PORT || 8000;
const connectMongo = require('./config/mongo.config');
const recipeRouter = require('./routers/recipe.router');

connectMongo()

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.use(recipeRouter)

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})