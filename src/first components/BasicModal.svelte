<script>
  import { createEventDispatcher } from 'svelte';

  export let number = '';
  const dispatch = createEventDispatcher();

  const info = () => {
    dispatch('info-dispatch', { txt: `clicked info ${number}` });
  };
  const closeModal = () => {
    dispatch('close-modal');
  };
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="overlay" on:click={closeModal} />

<div class="card">
  <div class="card-header d-flex justify-content-between">
    <h2>Lorem ipsum dolor sit amet.</h2>
    <button class="btn btn-danger" on:click={closeModal}>X</button>
  </div>
  <div class="card-body">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ipsam
      dicta fugiat recusandae facere, aliquid quidem! Molestiae dolores impedit
      excepturi deleniti. Architecto voluptate expedita possimus.
    </p>
  </div>
</div>

<style>
  .overlay {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .card {
    border: 1px solid #333;
    padding: 15px;
    background: white;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>
