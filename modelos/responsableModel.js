const responsables = [
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
    responsables.push(nuevoResponsable);
};

module.exports = {
    obtenerTodos,
    agregar
};

