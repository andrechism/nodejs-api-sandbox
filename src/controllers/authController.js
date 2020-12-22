
exports.login = (req, res) => {
  try {
    console.log(req.body);
    res.status(201)
      .json({
        status: 'success',
        message: 'login successful!'
      });
  } catch (error) {
    res.status(500)
      .json({
        status: 'fail',
        message: 'login error!'
      });
  }
};