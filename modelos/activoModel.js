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
    activos.push(nuevoActivo);
};

module.exports = {
    obtenerTodos,
    agregar
};