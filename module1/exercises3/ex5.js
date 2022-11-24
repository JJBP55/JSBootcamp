// #5

// Dado el siguiente array de objetos:

// Crea una función que devuelva un array con los nombres de las personas que viven en Madrid.

//  Crea una función que devuelva un array con los nombres de las personas que tengan más de 25 años.

//  Crea una función que devuelva un array con los nombres de las personas que tengan más de 25 años y que vivan en Madrid.

//  Encuentra la primera persona que le guste programar.

//  Haz la suma de todas las edades de las personas.

//  Crea un nuevo array solo con la ciudad de cada persona y su primer hobby. 

const users = [
    {
      name: 'Juan',
      age: 25,
      city: 'Madrid',
      hobbies: ['fútbol', 'poker', 'programar'],
    },
    {
      name: 'María',
      age: 30,
      city: 'Barcelona',
      hobbies: ['pintar', 'leer', 'programar'],
    },
    {
      name: 'Pedro',
      age: 20,
      city: 'Madrid',
      hobbies: ['fútbol', 'programar'],
    },
    {
      name: 'Laura',
      age: 35,
      city: 'Barcelona',
      hobbies: ['pintar', 'leer', 'programar'],
    },
    {
      name: 'Pablo',
      age: 27,
      city: 'Madrid',
      hobbies: ['fútbol', 'poker', 'programar'],
    },
];

//Madrileños
const madrilenos = users.filter((user) => user.city === 'Madrid');


console.log("Madrileños: ");
madrilenos.forEach((user) => console.log(user.name));


//Mayores de 25 años
const mayores = users.filter((user) => user.age >= 25);

console.log("\nMayores de 25 años: ");
mayores.forEach((user) => console.log(user.name));

//Mayores de 25 y Madrileño
const madrilenosMayores = users.filter((user) => user.city === 'Madrid' && user.age >= 25);

console.log("\nMadrileños mayores de 25 años: ");
madrilenosMayores.forEach((user) => console.log(user.name));

//Primera persona que le guste programar
const program = users.find((user) => user.hobbies.forEach('programar'));

console.log(program);


//ciudad de cada persona y su primer hobby. 

