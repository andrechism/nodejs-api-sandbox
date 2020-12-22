const { Router } = require('express');
const router = Router();

const user = require('./userRoutes');
const files = require('./fileRoutes');
const auth = require('./authRoutes');

// middlewares.development();

router.use('/v1/users', user);
router.use('/v1/files', files);
router.use('/v1/auth', auth);

module.exports = router;