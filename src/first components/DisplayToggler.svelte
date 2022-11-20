<script>
  let toggle = true;

  const toggleDisplay = () => {
    toggle = !toggle;
  };
</script>

<button on:click={toggleDisplay}>{toggle === false ? 'Display' : 'Hide'}</button
>

{#if toggle}
  <div class="show">
    <h2>contents to display or not</h2>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam molestiae
      officiis voluptas neque accusamus nihil recusandae necessitatibus cumque
      rerum. Similique!
    </p>
  </div>
{/if}

<style>
  .show {
    display: block;
    width: 25%;
    margin: auto;
    padding: 1em;
    background-color: black;
    color: white;
    box-shadow: 10px 5px 5px lightgrey;
  }
  .hide {
    display: none;
  }
</style>
