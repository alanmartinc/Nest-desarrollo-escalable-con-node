export class Pokemon {
    constructor(
        public readonly id: number, 
        public name: string
    ) {}
}

export const charmander = new Pokemon(1, 'Charmander'); 

charmander.name = 'Mew'; 
