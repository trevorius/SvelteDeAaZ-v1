<script>
  import List1 from './List1.svelte';
  export let name;
  let title = 'Monsieur';
  let count = 0;

  const increment = () => {
    count += 1;
  };
  const decrement = () => {
    count--;
  };
  const reset = () => {
    count = 0;
  };

  // list infos
  let lorem =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat rem aliquid repellat excepturi provident earum delectus beatae dolores facilis maiores! Iusto fugit beatae est aut praesentium! Expedita similique numquam officia.';

  let cat = {
    weight: 2,
    color: 'grey',
    race: 'persian',
    age: 3,
  };
</script>

<main>
  <h1>Hello {title} {name}!</h1>
  <p>
    Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn
    how to build Svelte apps.
  </p>
  <h2>
    {count}
  </h2>
  <button on:click={increment}> +1 </button>
  <button on:click={decrement}> -1 </button>
  <button on:click={reset}> RESET </button>

  <!-- prop can be defined in component -->
  <List1 {title} name="socks" />
  <List1 title=" liste1" {...cat} />
  <!-- props can be made equal to local variables -->
  <List1 title={name} />
  <!-- props can be defined using shorthand if variable is the same nae as the prop -->
  <List1 {title} {lorem} />
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
