const responsableModel = require('../modelos/responsableModel');

const obtenerResponsables = (req, res) => {
    const responsables= responsableModel.obtenerTodos();
    res.json(responsables);
};

const agregarResponsable = (req, res) => {
    try {
        const nuevoResponsable = req.body;
        responsableModel.agregar(nuevoResponsable);
        res.status(201).json({ message: 'Responsable agregado exitosamente' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { obtenerResponsables, agregarResponsable};

