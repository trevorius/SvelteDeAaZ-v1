<script>
  // send information to parent component
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
  const info = () => {
    dispatch('info-dispatch', { txt: 'cliked info' });
  };
</script>

<div>
  <p>Child element</p>
</div>
<button on:click={info}>Click child</button>
