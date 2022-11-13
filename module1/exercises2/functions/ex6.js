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
    },
    {
        nombre: 'Ninetales',
        tipo: 'fuego'
    }
];

function mostrarPokemones(array){
    console.log('Pokemones: ')
    for(let i = 0; i < array.length; i++){
        console.log(array[i].nombre);
    }
    return;
}

function pokemonesFuego(array){
    console.log('Pokemones de fuego: ')
    for(let i = 0; i < array.length; i++){
        if(pokemones[i].tipo == 'fuego'){
            console.log(pokemones[i].nombre)
        }
    }
    return;
}

mostrarPokemones(pokemones);
pokemonesFuego(pokemones);