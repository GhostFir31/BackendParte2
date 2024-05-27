const pool = require('../db');

const obtenerTodos = async () => {
    const [rows] = await pool.query('SELECT * FROM Activos');
    return rows;
};

const agregar = async (nuevoActivo) => {
    const { idActivo, numSerie, numInventario, tipoActivo, descripcionActivo, ubicacion, responsable } = nuevoActivo;
    const camposFaltantes = [];

    if (!idActivo) camposFaltantes.push('ID de Activo');
    if (!numSerie) camposFaltantes.push('Número de Serie');
    if (!numInventario) camposFaltantes.push('Número de Inventario');
    if (!tipoActivo) camposFaltantes.push('Tipo de Activo');
    if (!descripcionActivo) camposFaltantes.push('Descripción del Activo');
    if (!ubicacion) camposFaltantes.push('Ubicación');
    if (!responsable) camposFaltantes.push('Responsable');

    if (camposFaltantes.length > 0) {
        throw new Error(`Falta(n) el(los) siguiente(s) campo(s): ${camposFaltantes.join(', ')}`);
    }

    const [rows] = await pool.query('SELECT idActivo FROM Activos WHERE idActivo = ?', [idActivo]);
    if (rows.length > 0) {
        throw new Error('Ya existe un activo con este ID');
    }

    await pool.query(
        'INSERT INTO Activos (idActivo, numSerie, numInventario, tipoActivo, descripcionActivo, ubicacion, responsable, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?, ?, NOW(), NOW())', 
        [idActivo, numSerie, numInventario, tipoActivo, descripcionActivo, ubicacion, responsable]
    );
};

const actualizar = async (idActivo, activoActualizado) => {
    const { numSerie, numInventario, tipoActivo, descripcionActivo, ubicacion, responsable } = activoActualizado;
    const camposFaltantes = [];
    if (!numSerie) camposFaltantes.push('Número de Serie');
    if (!numInventario) camposFaltantes.push('Número de Inventario');
    if (!tipoActivo) camposFaltantes.push('Tipo de Activo');
    if (!descripcionActivo) camposFaltantes.push('Descripción del Activo');
    if (!ubicacion) camposFaltantes.push('Ubicación');
    if (!responsable) camposFaltantes.push('Responsable');

    if (camposFaltantes.length > 0) {
        throw new Error(`Falta(n) el(los) siguiente(s) campo(s): ${camposFaltantes.join(', ')}`);
    }

    const [rows] = await pool.query('SELECT idActivo FROM Activos WHERE idActivo = ?', [idActivo]);
    if (rows.length === 0) {
        throw new Error('No existe un activo con este ID');
    }

    await pool.query(
        'UPDATE Activos SET numSerie = ?, numInventario = ?, tipoActivo = ?, descripcionActivo = ?, ubicacion = ?, responsable = ?, updatedAt = NOW() WHERE idActivo = ?', 
        [numSerie, numInventario, tipoActivo, descripcionActivo, ubicacion, responsable, idActivo]
    );
};

const eliminar = async (idActivo) => {
    const [rows] = await pool.query('SELECT idActivo FROM Activos WHERE idActivo = ?', [idActivo]);
    if (rows.length === 0) {
        throw new Error('No existe un activo con este ID');
    }

    await pool.query('DELETE FROM Activos WHERE idActivo = ?', [idActivo]);
};

module.exports = {
    obtenerTodos,
    agregar,
    actualizar,
    eliminar
};



/*
const activos = [
    {
        id : "1111",
        numeroSerie : "12345",
        numeroInventario : "0",
        tipo : "computadora",
        descripcion : "Computadora de escritorio",
        ubicacion : "Mexico",
        responsable : "Juan",
        imagen :  "computadora.jpg"
    },
    {
        id : "1112",
        numeroSerie : "678910",
        numeroInventario : "1",
        tipo : "mobiliario",
        descripcion : "Mesa",
        ubicacion : "Mexico",
        responsable : "Luis",
        imagen :  "mesa.jpg"
    },
    {
        id : "1113",
        numeroSerie : "101112",
        numeroInventario : "3",
        tipo : "equipo de electronica",
        descripcion : "celular",
        ubicacion : "USA",
        responsable : "Oscar",
        imagen :  "celular.jpg"
    }
];


const obtenerTodos = () => {
    return activos;
};

const agregar = (nuevoActivo) => {
    
    const { id, numeroSerie, numeroInventario, tipo, descripcion, ubicacion, responsable } = nuevoActivo;
    if (!id || !numeroSerie || !numeroInventario || !tipo || !descripcion || !ubicacion || !responsable) {
        throw new Error('Todos los campos son obligatorios');
    }
    const existeActivo = activos.some(activo => activo.id === id);
    if (existeActivo) {
        throw new Error('Ya existe un activo con este ID');
    }

    activos.push(nuevoActivo);
};*/
