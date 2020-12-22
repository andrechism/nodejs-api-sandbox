const File = require('../models/fileModel');

exports.uploadFile = async (req, res) => {
  try {

    console.log(req.body, req.file);
    const { originalname: name, filename: path } = req.file;
    const file = {
      name,
      path,
      url: `${process.env.APP_URL}/data/uploads/${path}`
    };

    const createdFile = await File.create(file);

    res.status(200)
      .json({
        status: 'success',
        file: createdFile
      });
  } catch (error) {
    res.status(500)
      .json({
        status: 'fail',
        message: error
      });
  }
};

exports.getAllFiles = async (req, res) => {
  try {
    const files = await File.find();
    
    res.status(200)
      .json({
        status: 'success',
        data: {
          files
        }
      });
  } catch (error) {
    res.status(404)
      .json({
        status: 'fail',
        message: error
      });
  }
};