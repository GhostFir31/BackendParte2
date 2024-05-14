const passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;
require('dotenv').config();


passport.use(new GoogleStrategy({
    //clientID: ,
    //clientSecret: ,
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