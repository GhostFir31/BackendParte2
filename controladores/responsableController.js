const pool = require('../db');

const obtenerResponsables = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM responsables');
    res.status(200).json(rows);
  } catch (error) {
    console.error('Error al obtener responsables:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

const agregarResponsable = async (req, res) => {
  try {
    const { idResponsable, numeroEmpleado, nombre, activosCustodia } = req.body;
    await pool.query('INSERT INTO responsables (idResponsable, numEmpleado, nombreEmpleado, activosCustodia) VALUES (?, ?, ?, ?)', 
    [idResponsable, numeroEmpleado, nombre, activosCustodia]);
    res.status(201).json({ message: 'Responsable agregado con éxito' });
  } catch (error) {
    console.error('Error al agregar responsable:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

const actualizarResponsable = async (req, res) => {
  try {
    const { idResponsable, numEmpleado, nombreEmpleado, activosCustodia } = req.body;
    await pool.query('UPDATE responsables SET numEmpleado = ?, nombreEmpleado = ?, activosCustodia = ?, updatedAt = NOW() WHERE idResponsable = ?', 
    [numEmpleado, nombreEmpleado, activosCustodia, idResponsable]);
    res.status(200).json({ message: 'Responsable actualizado con éxito' });
  } catch (error) {
    console.error('Error al actualizar responsable:', error); 
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

const eliminarResponsable = async (req, res) => {
  try {
    const { idResponsable } = req.body;
    await pool.query('DELETE FROM responsables WHERE idResponsable = ?', [idResponsable]);
    res.status(200).json({ message: 'Responsable eliminado con éxito' });
  } catch (error) {
    console.error('Error al eliminar responsable:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
}

module.exports = {
  obtenerResponsables,
  agregarResponsable,
  actualizarResponsable,
  eliminarResponsable,
};

/*
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

*/