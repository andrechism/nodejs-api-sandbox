const { Router } = require('express');
const router = Router();

const userController = require('../controllers/userController');

router.route('/')
  .get(userController.getAllUsers)
  .post(userController.createUser);

router.route('/:id')
  .delete(userController.deleteUser);

module.exports = router;