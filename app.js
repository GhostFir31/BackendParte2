const cors = require('cors');
const express = require('express');
const app = express();
const fs= require("fs");
const https = require('https');
require('auth.js')
const router = require('./router/rutas');
const passport = require('passport');

const llavePrivada = fs.readFileSync('private.key');
const certificado = fs.readFileSync('certificate.crt');

const credenciales = {key: llavePrivada, cert: certificado,passphrase: 'password'};

const httpsServer = https.createServer(credenciales, app);

const PORT = 3000;

app.use(cors());

app.use('/', router);

httpsServer.listen(PORT, () => {

  console.log("Server running on port "+ PORT);

});

app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile'] }));

app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/paginaPrincipal');
  });

app.get('/paginaPrincipal', function(req, res){ 
  res.send("Hola Usuario Autenticado");
} );

app.get('/', function(req, res){ 
  res.send("Unauthorized");
} );
