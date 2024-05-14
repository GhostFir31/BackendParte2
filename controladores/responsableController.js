const responsableModel = require('../modelos/responsableModel');

const obtenerResponsables = (req, res) => {
    const responsables= responsableModel.obtenerTodos();
    res.json(responsables);
};

const agregarResponsable = (req, res) => {
    const nuevoResponsable = req.body;
    responsableModel.agregar(nuevoResponsable);
    res.status(201).send('Responsable agregado correctamente');
};

module.exports = { obtenerResponsables, agregarResponsable};

