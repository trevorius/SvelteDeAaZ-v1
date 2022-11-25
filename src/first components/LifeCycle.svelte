<script>
  import { createEventDispatcher } from 'svelte';
  import { onDestroy, onMount, beforeUpdate, afterUpdate } from 'svelte';
  export let number = '';
  const dispatch = createEventDispatcher();

  const info = () => {
    dispatch('info-dispatch', { txt: `clicked info ${number}` });
  };

  onMount(() => {
    console.log('create element');
  });
  onDestroy(() => {
    console.log('destroy element');
    dispatch('clear-txt', { txt: '' });
  });
  beforeUpdate(() => {
    console.log('preparing to create');
  });
  afterUpdate(() => {
    console.log('finished creating');
  });
</script>

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
