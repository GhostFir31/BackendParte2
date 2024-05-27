const pool = require('../db');

const obtenerUbicaciones = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM ubicacions');
    res.status(200).json(rows);
  } catch (error) {
    console.error('Error al obtener ubicaciones:', error); // Log the error for debugging
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

const agregarUbicacion = async (req, res) => {
  try {
    const { idUbicacion, descripcionUbicacion, activosAsociados } = req.body;
    await pool.query('INSERT INTO ubicacions (idUbicacion, descripcionUbicacion, activosAsociados, createdAt, updatedAt) VALUES (?, ?, ?, NOW(), NOW())', 
    [idUbicacion, descripcionUbicacion, activosAsociados]);
    res.status(201).json({ message: 'Ubicación agregada con éxito' });
  } catch (error) {
    console.error('Error al agregar ubicación:', error); // Log the error for debugging
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

const actualizarUbicacion = async (req, res) => {
  try {
    const { idUbicacion, descripcionUbicacion, activosAsociados } = req.body;
    await pool.query('UPDATE ubicacions SET descripcionUbicacion = ?, activosAsociados = ?, updatedAt = NOW() WHERE idUbicacion = ?', 
    [descripcionUbicacion, activosAsociados, idUbicacion]);
    res.status(200).json({ message: 'Ubicación actualizada con éxito' });
  } catch (error) {
    console.error('Error al actualizar ubicación:', error); // Log the error for debugging
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

const eliminarUbicacion = async (req, res) => {
  try {
    const { idUbicacion } = req.params;
    await pool.query('DELETE FROM ubicacions WHERE idUbicacion = ?', [idUbicacion]);
    res.status(200).json({ message: 'Ubicación eliminada con éxito' });
  } catch (error) {
    console.error('Error al eliminar ubicación:', error); // Log the error for debugging
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

module.exports = {
  obtenerUbicaciones,
  agregarUbicacion,
  actualizarUbicacion,
  eliminarUbicacion
};


