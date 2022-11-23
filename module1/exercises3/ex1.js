// #1
// Crea una función que reciba un array de strings y devuelva un array con las strings que empiecen por "a" o "A".


let array = ['Ana', 'Paola', 'sofía', 'gabriela', 'Antonio', 'abraham', 'antonia'];

const arrayNuevo = array.filter((element) => {
    if(element.charAt(0) === 'A'){
        return element;
    }
    else if(element.charAt(0) === 'a'){
        return element;
    }
    return;
});

console.log(arrayNuevo);

//const arrayNuevo = array.filter((element) => element.charAt(0) === 'a' || 'A');
