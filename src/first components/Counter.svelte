<script>
  export let counter = 0;
  export let min = 30;
  export let max = 80;
  export let incrementValue = 10;

  const increment = () => {
    counter += incrementValue;
  };
</script>

<button on:click={increment}> +{incrementValue} </button>

<h2>{counter}</h2>

{#if counter < min}
  <p>counter less than {min}</p>
{:else if counter >= min && counter <= max}
  <p>counter is between {min} and {max}</p>
{:else}
  <p>
    counter is above {max}
  </p>
{/if}
