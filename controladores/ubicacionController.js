
const ubicacionModel = require('../modelos/ubicacionModel');

const obtenerUbicaciones = (req, res) => {
    const ubicaciones = ubicacionModel.obtenerTodos();
    res.json(ubicaciones);
};

const agregarUbicacion = (req, res) => {
    try {
        const nuevaUbicacion = req.body;
        ubicacionModel.agregar(nuevaUbicacion);
        res.status(201).json({ message: 'Ubicación agregada exitosamente' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    obtenerUbicaciones,
    agregarUbicacion
};



