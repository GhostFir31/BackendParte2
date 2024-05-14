const passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;
require('dotenv').config();


passport.use(new GoogleStrategy({
    clientID: "385452778302-u5s6on3cari3h1uq1hfjjkqcmrgadki5.apps.googleusercontent.com",
    clientSecret: "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",
    callbackURL: "http://localhost:8081/paginaPrincipal"
  },
  function(accessToken, refreshToken, profile, cb) {
    done(null, profile);
  }
));

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
}   );