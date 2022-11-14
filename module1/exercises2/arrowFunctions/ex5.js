// Crea una Arrow Function que reciba un array de personas y devuelva un array con las personas mayores de edad.
// Dime cual es la persona más joven del array.
// Dime cual es la persona más mayor del array.

const personas = [
    { nombre: 'Juan', edad: 18 },
    { nombre: 'María', edad: 16 },
    { nombre: 'Pedro', edad: 20 },
    { nombre: 'Pablo', edad: 15 },
    { nombre: 'Laura', edad: 19 }
];

const mayoresDeEdad = array => {
    let mayores = [];

    for(let i = 0; i < array.length; i++){
        if(array[i].edad >= 18){
            mayores.push(array[i])
        }
    }
    return mayores;
}


const masJoven = array =>{
    let menor = 99;
    let posicion;
    for(let i = 0; i < array.length; i++){
        if(array[i].edad < menor){
            menor = array[i].edad;
            posicion = i;
        }
    }
    return `El mas joven es ${array[posicion].nombre} con ${array[posicion].edad} años.`;
}

const masAdulto = array =>{
    let mayor = 0;
    let posicion;
    for(let i = 0; i < array.length; i++){
        if(array[i].edad > mayor){
            mayor = array[i].edad;
            posicion = i;
        }
    }
    return `El mas adulto es ${array[posicion].nombre} con ${array[posicion].edad} años.`;
}

mayoresDeEdad(personas);
masJoven(personas);
masAdulto(personas);