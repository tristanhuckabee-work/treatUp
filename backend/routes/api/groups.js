const express = require('express');

const { requireAuth } = require('../../utils/auth');
const router = express.Router();
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const {
  User,
  Image,
  Event,
  Venue,
  Group,
  Member,
  Attendee,
  sequelize
} = require('../../db/models');


module.exports = router;