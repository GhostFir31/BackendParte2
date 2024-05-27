const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors'); 
const router = require('./router/rutas.js');

const corsOptions = {
  origin: ['http://localhost:3000'],
  optionsSuccessStatus: 200 
};

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use('/', router);

const PORT = 3001;

const passport = require('passport');
const session = require('express-session');
const { User } = require('./models');
const { Strategy: OAuth2Strategy } = require('passport-google-oauth20');

app.use(session({ secret: 'your_secret_key', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new OAuth2Strategy({
  clientID: "385452778302-u5s6on3cari3h1uq1hfjjkqcmrgadki5.apps.googleusercontent.com",
  clientSecret: "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",
  callbackURL: "http://localhost:3000/autenticado"
},

async (accessToken, refreshToken, profile, done) => {
  try {
    let user = await User.findOne({ where: { googleId: profile.id } });
    if (!user) {
      user = await User.create({
        googleId: profile.id,
        displayName: profile.displayName,
        email: profile.emails[0].value
      });
    }
    return done(null, user);
  } catch (err) {
    return done(err);
  }
}));


passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findByPk(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});


app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    res.redirect('/');
  }
);


app.get('/', (req, res) => {
  res.send(req.user ? `Hello, ${req.user.displayName}` : 'Not logged in');
});

app.get('/login', (req, res) => {
  res.send('Login failed');
});

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});