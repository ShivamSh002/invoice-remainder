const express = require('express');
const passport = require('passport');
const router = express.Router();

router.get('/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}));

router.get('/google/callback', (req, res, next) => {
  passport.authenticate('google', (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.redirect('https://invoice-remainder.vercel.app/');
    }

    req.logIn(user, (err) => {
      if (err) {
        return next(err);
      }
      return res.redirect('https://invoice-remainder.vercel.app/form');
    });
  })(req, res, next);
});

module.exports = router;
