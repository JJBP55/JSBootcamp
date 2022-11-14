//Crea una Arrow Function que reciba un número y muestre por consola si es par o impar.

const esPar = num => {
    if(num % 2 == 0){
        return console.log(`El número ${num} es par.`)
    }
    else{
        return console.log(`El número ${num} es impar.`)
    }
}

esPar(4);
