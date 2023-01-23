export class Pokemon {
    // GETTERS
    get imageUrl(): string {
        return `https://pokemon.com/${this.id}.jpg`
    }

    constructor(
        public readonly id: number, 
        public name: string
    ) {}

    // METODOS
    scream() {
        console.log(`${this.name.toUpperCase()} !!!`);
    }

    speak() {
        console.log(`${this.name}, ${this.name}`);
    }
}

export const charmander = new Pokemon(1, 'Charmander'); 

charmander.name = 'Mew';

charmander.scream();
charmander.speak();
