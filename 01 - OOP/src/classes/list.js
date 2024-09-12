class List {
  constructor() {
    // super(offset, limit);
    this.list = [];
  }

  //   async store() {
  //     const data = await this.fetch();
  //     this.list = data.results;
  //   }

  //   display() {
  //     this.list.forEach((pokemon) => {
  //       console.log(pokemon.name);
  //     });
  //   }

  x() {
    return '10';
  }

  y() {
    return console.log(this.x());
  }
}

export default List;
