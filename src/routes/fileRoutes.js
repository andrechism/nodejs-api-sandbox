const { Router } = require('express');
const multer = require('multer');
const multerConfig = require('../config/multer');
const fileController = require('../controllers/fileController');

const upload = multer(multerConfig);
const router = Router();

router.route('/')
  .get(fileController.getAllFiles)
  .post(upload.single('file'), fileController.uploadFile);



module.exports = router;