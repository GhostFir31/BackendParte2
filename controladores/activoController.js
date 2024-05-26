
const activoModel = require('../modelos/activoModel');

const obtenerActivos = (req, res) => {
    const activos = activoModel.obtenerTodos();
    res.json(activos);
};

const agregarActivo = (req, res) => {
    try {
        const nuevoActivo = req.body;
        activoModel.agregar(nuevoActivo);
        res.status(201).json({ message: 'Activo agregado exitosamente' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    obtenerActivos,
    agregarActivo
};

