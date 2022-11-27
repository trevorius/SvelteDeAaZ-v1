<script>
  import SearchBar from './SearchBar.svelte';

  let allPokes = [];
  let endTable = [];

  // build data
  const fecthPokemons = () => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
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
          });
      });
  };
</script>

<SearchBar />
<div class="content" />

<style>
  .content {
    max-width: 1400px;
    width: 95%;
    padding: 0 50px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    background: orange;
  }
</style>
