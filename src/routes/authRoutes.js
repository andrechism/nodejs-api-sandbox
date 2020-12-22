const { Router } = require('express');
const router = Router();

const authController = require('../controllers/authController');

router.route('/')
  .post(authController.login);

module.exports = router;