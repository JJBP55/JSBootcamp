// Exercise 6
//  Crea un array de 3 pokemons, el tipo de dato a usar será un objeto. Deberá contener nombre, tipoDePokemon.
//  Crea una condición y si el tipo de pokemon es fuego muestra por consola el mensaje ¡Es un pokemon de fuego

let pokemones = [
    {
        nombre: 'Bulbasaur',
        tipo: 'planta'
    },
    {
        nombre: 'Ivysaur',
        tipo: 'planta'
    },
    {
        nombre: 'Charmander',
        tipo: 'fuego'
    }
];

for(let i = 0; i < pokemones.length ; i++){
    if(pokemones[i].tipo == 'fuego'){
        console.log(`El Pokemon ${pokemones[i].nombre} ¡Es un pokemon de Fuego!`)
    }
};
