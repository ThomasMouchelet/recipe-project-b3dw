const express = require('express');
const app = express();
require('dotenv').config()
const port = process.env.PORT || 8000;
const connectMongo = require('./config/mongo.config');
const categoryRouter = require('./src/routers/category.router');
const recipeRouter = require('./src/routers/recipe.router');
const userRouter = require('./src/routers/user.router');
const authRouter = require('./src/routers/auth.router');
const cors = require('cors');

connectMongo()

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!');
})



app.use(recipeRouter)
app.use(categoryRouter)
app.use(userRouter)
app.use(authRouter)

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})