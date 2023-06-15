const router = require('express').Router();
// const eventsRouter = require('./events.js');
// const groupsRouter = require('./groups.js');
const sessionRouter = require('./session.js');
const userRouter = require('./users.js');
// const venuesRouter = require('./venues.js');

const { restoreUser } = require('../../utils/auth.js');

router.use(restoreUser);
// router.use('/events' , eventsRouter);
// router.use('/groups' , groupsRouter);
router.use('/session', sessionRouter);
router.use('/users'  , userRouter);
// router.use('/venues' , venuesRouter);

module.exports = router;