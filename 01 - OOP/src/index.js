import Pokemon from './classes/pokemon.js';
import List from './classes/list.js';

// Classes
const pokemon = new Pokemon(0, 10);
const list = new List();

// Elements
const buttonEl = document.querySelector('[data-name="pokemon-button"]');
const listEl = document.querySelector('[data-name="pokemon-list"]');

// pokemon.set();
pokemon.create().then((x) => listEl.appendChild(x));
