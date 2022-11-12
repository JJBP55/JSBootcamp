//Crea una función que reciba un número y muestre por consola si es par o impar.

function esPar(num){
    if(num/2 == 0){
        return console.log(`El número ${num} es par.`)
    }
    else{
        return console.log(`El número ${num} es impar.`)
    }
}

esPar();