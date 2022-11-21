const Category = require('../models/category.model');

const categoryController = {
    getAll: async (req, res) => {
        const categories = await Category.find();
        res.send(categories);
    },
    getOne: async (req, res) => {
        const { id } = req.params;
        try {
            const category = await Category.findById(id);
            res.send(category);
        } catch (error) {
            res.status(404).send({ message: 'Recipe not found' });
        }
    },
    create: async (req, res) => {
        try {
            const category = await Category.create(req.body);
            res.send(category);
        } catch (error) {
            res.status(400).send({ message: 'Invalid category data' });
        }
    },
    update: async (req, res) => {
        const { id } = req.params;
        try {
            const category = await Category.findByIdAndUpdate(id, req.body)
            res.send(category);
        } catch (error) {
            res.status(400).send({ message: 'Invalid category data' });
        }
    },
    delete: async (req, res) => {
        const { id } = req.params;
        try {
            const category = await Category.findByIdAndDelete(id);
            res.send(category);
        } catch (error) {
            res.status(404).send({ message: 'Category not found' });
        }
    }
}

module.exports = categoryController;