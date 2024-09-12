class Pokemon {
  constructor(offset, limit) {
    this.url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;
  }

  // Get the pokemon names & urls
  async get() {
    const res = await fetch(`${this.url}`);
    const data = await res.json();
    return data;
  }

  // Get the individual pokemon data and store in an array
  async set() {
    const data = await this.get();

    const list = [];
    const promises = data.results.map(async (y) => {
      const res = await fetch(y.url);
      const data = await res.json();
      list.push({
        id: data.id,
        name: data.name,
        stats: data.stats,
        height: data.height,
        weight: data.weight,
        abilities: data.abilities,
        sprites: data.sprites,
      });
    });

    await Promise.all(promises);
    // console.log(list);
    return list;
  }

  // Create the list of pokemon
  async create() {
    const data = await this.set();

    const ul = document.createElement('ul');
    ul.classList.add('flex', 'flex-wrap', 'justify-center', 'gap-8', 'p-4');

    data.map((x) => {
      // Card container
      const card = document.createElement('div');
      card.classList.add(
        'bg-white',
        'shadow-md',
        'rounded-lg',
        'overflow-hidden',
        'w-64',
        'm-4',
        'border',
        'border-gray-200'
      );

      // Card header
      const header = document.createElement('div');
      header.classList.add('flex', 'justify-between', 'p-4', 'bg-gray-100');

      // ID
      const id = document.createElement('p');
      id.textContent = `ID: ${x.id}`;
      id.classList.add('text-sm', 'text-gray-600');

      // Name
      const name = document.createElement('h2');
      name.textContent = x.name;
      name.classList.add('text-xl', 'font-bold', 'text-right');

      header.appendChild(id);
      header.appendChild(name);

      // Image / Sprite
      const img = document.createElement('img');
      img.src = x.sprites.front_default;
      img.alt = x.name;
      img.classList.add('w-full', 'h-48', 'object-contain', 'bg-gray-100');

      // Card content
      const content = document.createElement('div');
      content.classList.add('p-4');

      // Height
      const height = document.createElement('p');
      height.textContent = `Height: ${x.height}`;
      height.classList.add('text-sm', 'text-gray-600', 'mb-2');

      // Weight
      const weight = document.createElement('p');
      weight.textContent = `Weight: ${x.weight}`;
      weight.classList.add('text-sm', 'text-gray-600', 'mb-2');

      // Abilities
      const abilities = document.createElement('div');
      abilities.classList.add('text-sm', 'text-gray-600', 'mb-2');
      const abilitiesTitle = document.createElement('h3');
      abilitiesTitle.textContent = 'Abilities:';
      abilitiesTitle.classList.add('font-semibold', 'mb-1');
      abilities.appendChild(abilitiesTitle);
      x.abilities.map((y) => {
        const para = document.createElement('p');
        para.textContent = y.ability.name;
        abilities.appendChild(para);
      });

      // Stats
      const stats = document.createElement('div');
      stats.classList.add('text-sm', 'text-gray-600');
      const statsTitle = document.createElement('h3');
      statsTitle.textContent = 'Stats:';
      statsTitle.classList.add('font-semibold', 'mb-1');
      stats.appendChild(statsTitle);
      x.stats.map((y) => {
        const para = document.createElement('p');
        para.textContent = `${y.stat.name}: ${y.base_stat}`;
        stats.appendChild(para);
      });

      // Append content to card
      content.appendChild(height);
      content.appendChild(weight);
      content.appendChild(abilities);
      content.appendChild(stats);

      // Append header, image, and content to card
      card.appendChild(header);
      card.appendChild(img);
      card.appendChild(content);

      // Append card to list
      ul.appendChild(card);
    });

    return ul;
  }
}

export default Pokemon;
