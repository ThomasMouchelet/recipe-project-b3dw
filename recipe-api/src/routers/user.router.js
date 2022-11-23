const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

const endPoint = "/users";

router.get(endPoint, userController.getAll)
router.post(endPoint, userController.create)
router.get(`${endPoint}/:id`, userController.getOne)
router.put(`${endPoint}/:id`, userController.update)
router.delete(`${endPoint}/:id`, userController.remove)

module.exports = router;