const pool = require('../db');

const obtenerUbicaciones = async () => {
    const [rows] = await pool.query('SELECT * FROM ubicacions');
    return rows;
};

const agregarUbicacion = async (nuevaUbicacion) => {
    const { idUbicacion, descripcion, activosAsociados } = nuevaUbicacion;
    const camposFaltantes = [];

    if (!idUbicacion) camposFaltantes.push('ID de Ubicación');
    if (!descripcion) camposFaltantes.push('Descripción');
    if (!activosAsociados) camposFaltantes.push('Activos Asociados');

    if (camposFaltantes.length > 0) {
        throw new Error(`Falta(n) el(los) siguiente(s) campo(s): ${camposFaltantes.join(', ')}`);
    }
    
    const [rows] = await pool.query('SELECT idUbicacion FROM ubicacions WHERE idUbicacion = ?', [idUbicacion]);
    if (rows.length > 0) {
        throw new Error('Ya existe una ubicación con este ID');
    }

    await pool.query('INSERT INTO ubicacions (idUbicacion, descripcionUbicacion, activosAsociados, createdAt, updatedAt) VALUES (?, ?, ?, NOW(), NOW())', 
    [idUbicacion, descripcion, activosAsociados]);
};

const actualizarUbicacion = async (idUbicacion, ubicacionActualizada) => {
    const { descripcion, activosAsociados } = ubicacionActualizada;
    const camposFaltantes = [];
    if (!descripcion) camposFaltantes.push('Descripción');
    if (!activosAsociados) camposFaltantes.push('Activos Asociados');
    if (camposFaltantes.length > 0) {
        throw new Error(`Falta(n) el(los) siguiente(s) campo(s): ${camposFaltantes.join(', ')}`);
    }

    const [rows] = await pool.query('SELECT idUbicacion FROM ubicacions WHERE idUbicacion = ?', [idUbicacion]);
    if (rows.length === 0) {
        throw new Error('No existe una ubicación con este ID');
    }

    await pool.query('UPDATE ubicacions SET descripcionUbicacion = ?, activosAsociados = ?, updatedAt = NOW() WHERE idUbicacion = ?', [descripcion, activosAsociados, idUbicacion]);
};

const eliminarUbicacion = async (idUbicacion) => {
    const [rows] = await pool.query('SELECT idUbicacion FROM ubicacions WHERE idUbicacion = ?', [idUbicacion]);
    if (rows.length === 0) {
        throw new Error('No existe una ubicación con este ID');
    }

    await pool.query('DELETE FROM ubicacions WHERE idUbicacion = ?', [idUbicacion]);
};

module.exports = {
    obtenerUbicaciones,
    agregarUbicacion,
    actualizarUbicacion,
    eliminarUbicacion
};


/*const ubicaciones = [
    {
        idUbicacion: "20",
        descripcion : "Mexico",
        activosAsociados : "computadora,mesa",
        imagenUbicacion :  "mexico.jpg"
    },
    {
        idUbicacion: "21",
        descripcion : "USA",
        activosAsociados : "celular",
        imagenUbicacion :  "usa.jpg"
    },
    {
        idUbicacion: "22",
        descripcion : "Canada",
        activosAsociados : "none",
        imagenUbicacion :  "canada.jpg"
    }
];

const obtenerTodos = () => {
    return ubicaciones;
};

const agregar = (nuevaUbicacion) => {
    
    const { idUbicacion, descripcion, activosAsociados } = nuevaUbicacion;
    if (!idUbicacion || !descripcion || !activosAsociados) {
        throw new Error('Todos los campos son obligatorios');
    }

    ubicaciones.push(nuevaUbicacion);
};

module.exports = {

    obtenerTodos,
    agregar
};

*/