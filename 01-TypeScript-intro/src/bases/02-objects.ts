export const pokemonIds = [1,3,4,24,53];
// Conversor de string a number
pokemonIds.push(+'100');

interface Pokemon {
    id: number;
    name: string;
    age?: number;
}

export const bulbasaur:Pokemon = {
    id: 1,
    name: 'Bulbasaur'
}

console.log(pokemonIds);
console.log(bulbasaur);
