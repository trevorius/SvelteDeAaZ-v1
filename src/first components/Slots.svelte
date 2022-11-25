<script>
  import { createEventDispatcher } from 'svelte';

  export let number = '';

  const dispatch = createEventDispatcher();
  const info = () => {
    dispatch('info-dispatch', { txt: `clicked info ${number}` });
  };
</script>

<div class="card mb-2" />

<div class="card">
  <div class="card-header">
    <slot />
  </div>
  <div class="card-body">
    <slot name="content" />
    <button on:click={info}>Click child</button>
  </div>
  <slot name="footer" />
</div>
