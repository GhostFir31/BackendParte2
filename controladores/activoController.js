const activoModel = require('../modelos/activoModel');

const obtenerActivos = async (req, res) => {
  try {
    const activos = await activoModel.obtenerTodos();
    res.status(200).json(activos);
  } catch (error) {
    console.error('Error al obtener activos:', error); 
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

const agregarActivo = async (req, res) => {
  try {
    const nuevoActivo = req.body;
 //   console.log('Datos recibidos para agregar:', nuevoActivo); 
    await activoModel.agregar(nuevoActivo);
    res.status(201).json({ message: 'Activo agregado con éxito' });
  } catch (error) {
    console.error('Error al agregar activo:', error.message); 
    res.status(400).json({ message: error.message });
  }
};

const actualizarActivo = async (req, res) => {
  try {
    const { idActivo } = req.params;
    const activoActualizado = req.body;
   // console.log(`Datos recibidos para actualizar el activo ${idActivo}:`, activoActualizado); 
    await activoModel.actualizar(idActivo, activoActualizado);
    res.status(200).json({ message: 'Activo actualizado con éxito' });
  } catch (error) {
    console.error('Error al actualizar activo:', error.message); 
    res.status(400).json({ message: error.message });
  }
};

const eliminarActivo = async (req, res) => {
  try {
    const { idActivo } = req.params;
    await activoModel.eliminar(idActivo);
    res.status(200).json({ message: 'Activo eliminado con éxito' });
  } catch (error) {
    console.error('Error al eliminar activo:', error.message);
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  obtenerActivos,
  agregarActivo,
  actualizarActivo,
  eliminarActivo
};


/*
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
*/
