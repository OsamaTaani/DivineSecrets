const express = require('express');
const session = require('express-session');
const passport = require('passport');
require('./auth');
// const db =require("./db");


const app = express();

function isLoggedIn(req, res, next) {
  req.user ? next() : res.sendStatus(401);
}

app.use(session({ secret: 'cats', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
  res.send('<a href="/google">Authenticate with Google</a>');
});

app.get('/google',
  passport.authenticate('google', { scope: [ 'email', 'profile' ] }
));

app.get( '/google/callback',
  passport.authenticate( 'google', {
    successRedirect: '/protected',
    failureRedirect: '/google/failure'
  })
);

app.get('/protected', isLoggedIn, (req, res) => {
  res.send(`Hello ${req.user.displayName}`);
});

app.get('/logout', (req, res) => {
  req.logout();
  req.session.destroy();
  res.send('Goodbye!');
});

app.get('/google/failure', (req, res) => {
  res.send('Failed to authenticate..');
});

app.listen(3001, () => console.log('listening on port: 3001'));