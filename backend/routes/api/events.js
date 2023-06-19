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


// ADD EVENT IMAGE
router.post('/:eventId', (req, res, next) => {});
// GET ALL EVENTS
router.get('/', (req, res, next) => {});
// GET EVENT DETAILS
router.get('/:eventId', (req, res, next) => {});
// UPDATE EVENT
const editEventFunction = (req, res) => {};
router.put('/:eventId', editEventFunction);
router.patch('/:eventId', editEventFunction);
// DELETE EVENT
router.delete('/:eventId', (req, res) => {});


module.exports = router;