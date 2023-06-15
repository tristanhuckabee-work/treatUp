const router = require('express').Router();

router.get("/csrf/restore", (req, res) => {
  const csrfToken = req.csrfToken();

  res.cookie("XSRF-TOKEN", csrfToken);
  res.status(200)
  return res.json({ 'XSRF-Token': csrfToken });
});
router.post("/test", (req, res) => {
  res.json(req.body)
})

module.exports = router;