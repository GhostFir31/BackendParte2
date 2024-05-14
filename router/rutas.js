const express = require('express');
const bodyParser = require('body-parser');
const activoController = require('../controladores/activoController');
const responsableController = require('../controladores/responsableController');
const ubicacionController = require('../controladores/ubicacionController');

require('./auth')

const router = express.Router();

router.use(bodyParser.json());

const myMiddleware = (req, res, next) => {
    console.log('Middleware function executed');
    next();
};

router.use(myMiddleware);

router.get('/activos', activoController.obtenerActivos);
router.post('/activos', activoController.agregarActivo);

router.get('/responsables', responsableController.obtenerResponsables);
router.post('/responsables', responsableController.agregarResponsable);

router.get('/ubicaciones', ubicacionController.obtenerUbicaciones);
router.post('/ubicaciones', ubicacionController.agregarUbicacion);

router.get('/', (req, res) => {
    res.send('Hello World!');
});

module.exports = router;

app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile'] }));

app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });