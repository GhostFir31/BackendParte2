
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
};
module.exports = {
    obtenerTodos,
    agregar
};