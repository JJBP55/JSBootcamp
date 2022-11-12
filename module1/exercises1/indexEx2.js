//Exercise 2
//  Crea una variable llamada nombre y asígnale tu nombre como valor.
//  Crea una variable llamada edad y asígnale tu edad como valor.
//  Crea una variable llamada mayorDeEdad y asígnale un valor booleano que indique si eres mayor de edad.
//  Crea una variable llamada direccion y asígnale un objeto con tu dirección.
//  Crea una variable llamada coloresFavoritos y asígnale un array con tus colores favoritos.
//  Crea una variable llamada lenguajesFavoritos y asígnale un array con tus lenguajes de programación favoritos.
//  Crea una variable llamada mejorLenguaje y asígnale el primer elemento del array lenguajesFavoritos.
//  Crea una variable llamada peorLenguaje y asígnale el último elemento del array lenguajesFavoritos

let nombre = 'Jonathan';
let edad = 25;
let mayorDeEdad = true;
let direccion = 'Guaicoco';
let coloresFavoritos = ['Azul', 'Negro', 'Gris','Verde'];
let lenguajesFavoritos = ['JS', 'C++', 'Java', 'Python'];
let mejorLenguaje = lenguajesFavoritos[0];
let peorLenguaje = lenguajesFavoritos[lenguajesFavoritos.length - 1];

console.log(nombre);  
console.log(edad);  
console.log(mayorDeEdad);  
console.log(direccion);  
console.log(coloresFavoritos);  
console.log(lenguajesFavoritos);  
console.log(mejorLenguaje);  
console.log(peorLenguaje);  