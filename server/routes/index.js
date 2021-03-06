/* eslint-disable jsx-a11y/img-has-alt */
/* eslint-disable no-undef */
const path = require('path');
const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

// If no API routes are hit, send the React app
router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../client/build/index.html'));
});

module.exports = router;
