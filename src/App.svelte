<script>
  import CountryList from './first components/ListIterations.svelte';
  import DisplayToggler from './first components/DisplayToggler.svelte';
  import Counter from './first components/Counter.svelte';

  let counterProps = {
    counter: 0,
    min: 20,
    max: 70,
    incrementValue: 5,
  };
  let countries = ['France', 'England', 'Deutchland', 'Espana'];
</script>

<CountryList {countries} />

<Counter {...counterProps} />

<DisplayToggler />
