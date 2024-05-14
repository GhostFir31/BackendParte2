const ubicaciones = [
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
    ubicaciones.push(nuevaUbicacion);
};

module.exports = {

    obtenerTodos,
    agregar
};

