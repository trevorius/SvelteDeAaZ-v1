<script>
  import PersonalizedEvents from './first components/PersonalizedEvents.svelte';
  import Events from './first components/events.svelte';
  import Reactivity from './first components/Reactivity.svelte';
  import Form from './first components/Form.svelte';
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

<div>
  <p>parent element</p>
</div>

<PersonalizedEvents />

<!-- 
  <Events
    on:click={() => {
      alert('clicked button!');
    }}
  />
  <Reactivity />
  <Form />
<CountryList {countries} />

<Counter {...counterProps} />

<DisplayToggler /> -->
