// routes/index.js

const express = require('express');
const router = new express.Router();

// Define schema variables
const userSchema = require('../models/User');
const groupSchema = require('../models/Group');
const gameSchema = require('../models/Game');

// Define controller variables
const userController = require('../controllers/user');
const groupController = require('../controllers/group');
const gameController = require('../controllers/game');

router.use('/groups', function(req, res, next) {
  req.groupSchema = groupSchema;
  req.groupController = groupController;
  req.userSchema = userSchema;
  req.userController = userController;
  req.gameSchema = gameSchema;
  req.gameController = gameController;
  next();
}, require('./api/group'));

router.use('/users', function(req, res, next) {
  req.userSchema = userSchema;
  req.userController = userController;
  req.groupSchema = groupSchema;
  req.groupController = groupController;
  next();
}, require('./api/user'));

router.use('/games', function(req, res, next) {
  req.gameSchema = gameSchema;
  req.gameController = gameController;
  next();
}, require('./api/game'));

module.exports = router;
