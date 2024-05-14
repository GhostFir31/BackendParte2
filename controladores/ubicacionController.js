
const ubicacionModel = require('../modelos/ubicacionModel');

const obtenerUbicaciones = (req, res) => {
    const ubicaciones = ubicacionModel.obtenerTodos();
    res.json(ubicaciones);
};

const agregarUbicacion = (req, res) => {
    const nuevaUbicacion = req.body;
    ubicacionModel.agregar(nuevaUbicacion);
    res.status(201).send('Ubicacion agregado correctamente');
};

module.exports = {
    obtenerUbicaciones,
    agregarUbicacion
};



