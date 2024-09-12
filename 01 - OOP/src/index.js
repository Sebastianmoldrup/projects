import GetPokemon from './classes/getPokemon.js';

const pokemon = new GetPokemon(0, 20);
pokemon.getPokemon();

// const url = 'https://pokeapi.co/api/v2/pokemon';
// let offset = 0;

// const getPokemon = async () => {
//   const response = await fetch(`${url}?offset=${offset}&limit=${20}`);
//   const data = await response.json();
//   console.log(data);
// Find pokemon amount / 20 and use math.ceil to get page amount
//   const pages = console.log(Math.ceil(data.count / 20));
//   return data;
// };

// getPokemon();

// class Pokemon {
//   constructor({ name, id, stats, height, weight, abilities, sprites }) {
//     this.name = name;
//     this.id = id;
//     this.stats = stats;
//     this.height = height;
//     this.weight = weight;
//     this.abilities = abilities;
//     this.sprites = sprites;
//   }

//   static async get() {
//     const response = await fetch(this.url);
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     const data = await response.json();
//     return data;
//   }
// }

// const processPokemon = async () => {
//   const list = await getPokemon().results;
//     const detailedPokemonList = await Promise.all(
//       pokemonList.map(async (pokemon) => {
//         const pokemonData = await Pokemon.get(pokemon.url);
//         console.log(pokemonData);
//         return new Pokemon(pokemonData);
//       })
//     );
//   list.map((pokemon) => {
//     console.log(pokemon.name);
//   });
// };

// processPokemon();

// console.log(list);

{
  /* 
    Javascript class concept
    Class - Blueprint for creating objects
    Constructor - Method that is used for initializing object variables when they are created
    Properties - Variables that are attached to the instance of a class
    Methods - Functions that belong to an instance of the class
    Instance - An individual object created using the class
*/
}

// class Product {
//   // Encapsulation
//   #name;

//   constructor(name, price, stock) {
//     this.name = name;
//     this.price = price;
//     this.stock = stock;
//   }

//   sell() {
//     if (this.stock === 0) {
//       console.log('Sorry, we are out of stock');
//       return;
//     }
//     this.stock--;
//     console.log(`Sold 1 ${this.name}.`);
//   }

//   restock(amount) {
//     this.stock += amount;
//     console.log(`Restocked ${amount} ${this.name}.`);
//   }

//   describe() {
//     console.log(
//       `${this.name} costs $${this.price} and we have ${this.stock} in stock.`
//     );
//   }

//   info() {
//     return `${this.name} costs $${this.price} and we have ${this.stock} in stock.`;
//   }
// }

// const product1 = new Product('Iphone', 1500, 10);
// product1.sell();
// product1.restock(4);
// console.log(product1);

// class ElectronicProduct extends Product {
//   constructor(name, price, stock, warranty) {
//     // Inheritance
//     super(name, price, stock);
//     this.warranty = warranty;
//   }

//   // Polymorphism
//   describe() {
//     console.log(
//       `${super.info()} It comes with a ${this.warranty}-year warranty.`
//     );
//   }
// }

// const product2 = new ElectronicProduct('MacBook', 2500, 4, 5);
// product2.describe();
