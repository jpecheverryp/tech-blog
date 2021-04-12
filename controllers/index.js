const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const blogpostRoutes = require('./blogpostRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/blogpost', blogpostRoutes)

module.exports = router;
