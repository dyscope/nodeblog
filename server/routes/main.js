const express = require('express');
const router = express.Router();

router.get('', (req, res) => {
  const locals = {
    title: 'Home page',
    description: 'Simple blog, written on express.js and mongoDB',
  };
  res.render('index', { locals });
});

router.get('/about', (req, res) => {
  res.render('about');
});

module.exports = router;
