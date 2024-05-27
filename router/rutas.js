const express = require('express');
const activoController = require('../controladores/activoController');
const responsableController = require('../controladores/responsableController');
const ubicacionController = require('../controladores/ubicacionController');

const router = express.Router();


const myMiddleware = (req, res, next) => {
    //console.log('Middleware function executed');
    next();
};

router.use(myMiddleware);

router.get('/activos', activoController.obtenerActivos);
router.post('/activos', activoController.agregarActivo);
router.put('/activos/:idActivo', activoController.actualizarActivo); 
router.delete('/activos/:idActivo', activoController.eliminarActivo); 

router.get('/responsables', responsableController.obtenerResponsables);
router.post('/responsables', responsableController.agregarResponsable);
router.put('/responsables/:idResponsable', responsableController.actualizarResponsable);
router.delete('/responsables/', responsableController.eliminarResponsable);


router.get('/ubicaciones', ubicacionController.obtenerUbicaciones);
router.post('/ubicaciones', ubicacionController.agregarUbicacion);
router.put('/ubicaciones/:idUbicacion', ubicacionController.actualizarUbicacion); 
router.delete('/ubicaciones/:idUbicacion', ubicacionController.eliminarUbicacion); 


router.get('/', (req, res) => {
    res.send('Hello World!');
});

module.exports = router;