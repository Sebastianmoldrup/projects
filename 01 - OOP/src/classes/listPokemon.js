class ListPokemon {
  constructor({ name, id, stats, height, weight, abilities, sprites }) {
    this.name = name;
    this.id = id;
    this.stats = stats;
    this.height = height;
    this.weight = weight;
    this.abilities = abilities;
    this.sprites = sprites;
  }

  display() {
    console.log(this.name);
  }
}
