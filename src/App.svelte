<script>
  import DisplayToggler from './first components/DisplayToggler.svelte';
  import Counter from './first components/Counter.svelte';

  let counter = 0;
  let min = 20;
  let max = 70;
  let incrementValue = 5;
</script>

<Counter {counter} {min} {max} {incrementValue} />

<DisplayToggler />
