const cors = require('cors');
const express = require('express');
const app = express();
const fs= require("fs");
const https = require('https');

const router = require('./router/rutas.js')

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

