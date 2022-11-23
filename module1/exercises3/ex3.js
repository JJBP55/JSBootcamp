// #3

// Crea una función que permita comprobar si un string es un palíndromo.
// Un palíndromo es una palabra o frase que se lee igual de izquierda a derecha que de derecha a izquierda.

//  Ahora haz la misma comprobación pero con un array de strings.

function palindromo(palabra){

    const reves = palabra.split("").reverse().join("");

    if (reves === palabra){
        console.log(`${palabra} es palíndromo`)
    }
    else{
        console.log(`${palabra} no es palíndromo`)
    }
    return;
};

palindromo('reconocer');


// Segundo metodo con funciones flechas

const voltear = (palabra) => palabra.split("").reverse().join("");

const palindromo2 = (palabra) => {
    (palabra === voltear(palabra)) ? console.log("La palabra es palindroma") : console.log("La palabra no es palindroma"); 
};

palindromo2("reconocer");