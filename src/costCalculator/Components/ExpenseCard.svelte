<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
  export let name, amount, id;
  name = name ? name : 'Car';
  amount = amount ? amount : '200';

  const removeThisCard = () => {
    dispatch('remove-this-card', { name: name, amount: amount, id: id });
  };
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->

<div class="card my-2">
  <div class="card-body">
    <h3>{name}</h3>
    <p>{amount}</p>
    <i class="trash" on:click={removeThisCard}>
      <img src="assets/image/trash-solid.svg" alt="" />
    </i>
  </div>
</div>

<style>
  .card {
    position: relative;
  }
  .card h3 {
    font-size: 35px;
  }
  .card p {
    font-weight: 300;
    font-size: 25px;
  }
  i {
    cursor: pointer;
  }
  i img {
    width: 30px;
  }
  .trash {
    position: absolute;
    top: 10px;
    right: 20px;
  }
</style>
