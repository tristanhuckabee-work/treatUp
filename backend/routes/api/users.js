const express = require('express');
const bcrypt = require('bcryptjs');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User } = require('../../db/models');
const router = express.Router();
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');


const validateSignup = [
  check('email')
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage('Please provide a valid email.'),
  check('userName')
    .exists({ checkFalsy: true })
    .isLength({ min: 4 })
    .withMessage('Please provide a userName with at least 4 characters.'),
  check('userName')
    .not()
    .isEmail()
    .withMessage('UserName cannot be an email.'),
  check('password')
    .exists({ checkFalsy: true })
    .isLength({ min: 6 })
    .withMessage('Password must be 6 characters or more.'),
  handleValidationErrors
];


// Sign up
router.post('/', validateSignup, async (req, res) => {
  const { email, password, userName } = req.body;
  const hashedPassword = bcrypt.hashSync(password);
  const user = await User.create({ email, userName, hashedPassword });
  const safeUser = { id: user.id, email, userName };

  await setTokenCookie(res, safeUser);

  return res.json({
    user: safeUser
  });
}
);

module.exports = router;