const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/category.controller');

const endPoint = `/categories`;

router.get(endPoint, categoryController.getAll)
router.get(`${endPoint}/:id`, categoryController.getOne)
router.post(`${endPoint}`, categoryController.create)
router.put(`${endPoint}/:id`, categoryController.update)
router.delete(`${endPoint}/:id`, categoryController.delete)

module.exports = router;