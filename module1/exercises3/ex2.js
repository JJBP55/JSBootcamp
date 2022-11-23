// #2
// Escribe un programa que permita a alguien adivinar un PIN de 4 dígitos exactamente 3 veces. Si el usuario adivina el número correctamente, imprime "¡Eso fue correcto!" De lo contrario, imprimirá "Lo siento, eso estaba mal." El programa se detiene después del 4º intento o si lo adivinaron correctamente.
// Puedes usar este código para obtener el PIN de entrada del usuario:

// const pin = prompt('Introduce el PIN:');

// Haz el mismo ejercicio pero ahora el usuario tiene intentos infinitos hasta que acierte el PIN o escriba salir.

let i = 0;
let salir = false;
let password = 1863;



while((i < 4) || (salir !== false)){
     const pin = prompt('Introduce el PIN:')
     if(pin == password){
         console.log("¡Eso fue correcto!");
         salir == true;
     }
     else{
         console.log("Lo siento, eso estaba mal." );
     }  
     i++;
};

// while(salir !== false){

//     const pin = prompt('Introduce el PIN:');
    
//     if(pin == password){
//         console.log("¡Eso fue correcto!");
//         salir == true;
//     }
//     else{
//         console.log("Lo siento, eso estaba mal." );
//     }
    
//     // const seguir = prompt('Introduce 1 si quieres salir');
    
//     // if(seguir == 1){
//     //     salir == true
//     // }

// };
