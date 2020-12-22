const User = require('../models/userModel');

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200)
      .json({
        status: 'success',
        data: {
          users
        }
      });
  } catch (error) {
    res.status(500)
    .json({
      status: 'fail',
      message: error
    })
  }
};

exports.createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(200)
      .json({
        status: 'success',
        data: {
          user
        }
      });
  } catch (error) {
    res.status(400)
      .json({
        status: 'fail',
        message: error
      });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    res.status(202)
      .json({
        status: 'success',
        message: `${user? 'User deleted!' : 'This user does not exist!'}`,
      });
  } catch (error) {
    res.status(404)
      .json({
        status: 'fail',
        message: error
      });
  }
};