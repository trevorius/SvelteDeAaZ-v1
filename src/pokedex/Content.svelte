<script>
  import Card from './contentElements/Card.svelte';
  import SearchBar from './contentElements/SearchBar.svelte';
  import { v4 as uuidv4 } from 'uuid';

  let allPokes = [];
  let endTable = [];

  // build data
  const fecthPokemons = (offset) => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=150`) // can be made larger to search them all (1000)
      .then((response) => response.json())
      .then((allPoke) => {
        allPoke.results.forEach((pokemon) => {
          fetchCompletePoke(pokemon);
        });
      });
  };
  fecthPokemons();
  const fetchCompletePoke = (pokemon) => {
    let fullPokemon = {};
    let url = pokemon.url;
    let name = pokemon.name;
    fullPokemon.name = name;
    fetch(url)
      .then((response) => response.json())
      .then((pokeData) => {
        fullPokemon.pic = pokeData.sprites.back_default;
        fetch(`https://pokeapi.co/api/v2/pokemon-species/${name}/`)
          .then((response) => response.json())
          .then((pokeData) => {
            // console.log(pokeData);
            fullPokemon.nameFr = pokeData.names[4];
            allPokes.push(fullPokemon);
          })
          .then(() => {
            console.log(allPokes);
            endTable = allPokes.slice(0, 20);
            allPokes = allPokes;
          });
      });
  };

  const search = (e) => {
    let value = e.detail.search;
    endTable = allPokes.filter(
      (p) =>
        p.name.toLowerCase().includes(value) ||
        p.nameFr.name.toLowerCase().includes(value)
    );
  };

  // console.log(endTable);
</script>

<SearchBar pokemonCount={allPokes.length} on:search-pokedex={search} />

<div class="content">
  {#each endTable as pokemon (uuidv4())}
    <!-- {#each allPokes as pokemon (uuidv4())} -->
    <Card name={pokemon.name} nameFr={pokemon.nameFr} image={pokemon.pic} />
  {/each}
</div>

<style>
  .content {
    max-width: 1400px;
    width: 95%;
    padding: 0 50px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    /* background: orange; */
  }
</style>
