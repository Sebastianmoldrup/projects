class GetPokemon {
  constructor(offset, limit) {
    this.url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;
  }

  async getPokemon() {
    const response = await fetch(`${this.url}`);
    const data = await response.json();
    console.log(data);
    return data;
  }
}

export default GetPokemon;
