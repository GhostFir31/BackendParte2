const pool = require('../db');

const obtenerTodosResponsables = async () => {
    const [rows] = await pool.query('SELECT * FROM responsables');
    return rows;
};

const agregarResponsable = async (nuevoResponsable) => {
    const { idResponsable, numEmpleado, nombreEmpleado, activosCustodia } = nuevoResponsable;
    const camposFaltantes = [];

    if (!idResponsable) camposFaltantes.push('ID de Responsable');
    if (!numEmpleado) camposFaltantes.push('Número de Empleado');
    if (!nombreEmpleado) camposFaltantes.push('Nombre');
    if (!activosCustodia) camposFaltantes.push('Activos en Custodia');

    if (camposFaltantes.length > 0) {
        throw new Error(`Falta(n) el(los) siguiente(s) campo(s): ${camposFaltantes.join(', ')}`);
    }
    
    const [rows] = await pool.query('SELECT idResponsable FROM responsables WHERE idResponsable = ?', [idResponsable]);
    if (rows.length > 0) {
        throw new Error('Ya existe un responsable con este ID');
    }

    await pool.query('INSERT INTO responsables (idResponsable, numEmpleado, nombreEmpleado, activosCustodia, createdAt, updatedAt) VALUES (?, ?, ?, ?, NOW(), NOW())', 
    [idResponsable, numEmpleado, nombreEmpleado, activosCustodia]);
};

const actualizarResponsable = async (idResponsable, responsableActualizado) => {
  const { numEmpleado, nombreEmpleado, activosCustodia } = responsableActualizado;
  const camposFaltantes = [];
  if (!numEmpleado) camposFaltantes.push('Número de Empleado');
  if (!nombreEmpleado) camposFaltantes.push('Nombre');
  if (!activosCustodia) camposFaltantes.push('Activos en Custodia');
  if (camposFaltantes.length > 0) {
      throw new Error(`Falta(n) el(los) siguiente(s) campo(s): ${camposFaltantes.join(', ')}`);
  }

  const [rows] = await pool.query('SELECT idResponsable FROM responsables WHERE idResponsable = ?', [idResponsable]);
  if (rows.length === 0) {
      throw new Error('No existe un responsable con este ID');
  }

  await pool.query('UPDATE responsables SET numEmpleado = ?, nombreEmpleado = ?, activosCustodia = ?, updatedAt = NOW() WHERE idResponsable = ?', [numEmpleado, nombreEmpleado, activosCustodia, idResponsable]);
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
  };
  
  module.exports = {
    obtenerTodosResponsables,
    agregarResponsable,
    actualizarResponsable,
    eliminarResponsable,
  };

/*const responsables = [
    {
        idResponsable: "00001",
        numeroEmpleado : "1",
        nombre : "Juan",
        activosCustodia : "computadora",
        imagenResponsable :  "juan.jpg"
    },
    {
        idResponsable: "00002",
        numeroEmpleado : "2",
        nombre : "Luis",
        activosCustodia : "mesa",
        imagenResponsable :  "mesa.jpg"
    },
    {
        idResponsable: "00003",
        numeroEmpleado : "3",
        nombre : "Oscar",
        activosCustodia : "celular",
        imagenResponsable :  "celular.jpg"
    }
];

const obtenerTodos = () => {
    return responsables;
};

const agregar = (nuevoResponsable) => {
    
     const { idResponsable, numeroEmpleado, nombre, activosCustodia } = nuevoResponsable;
     if (!idResponsable || !numeroEmpleado || !nombre || !activosCustodia) {
         throw new Error('Todos los campos son obligatorios');
     }
 
     responsables.push(nuevoResponsable);
};

module.exports = {
    obtenerTodos,
    agregar
};
*/
