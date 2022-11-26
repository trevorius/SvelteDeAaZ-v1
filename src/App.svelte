<script>
  import PersonalizedEvents from './first components/PersonalizedEvents.svelte';
  import Slots from './first components/Slots.svelte';
  import LifeCycle from './first components/LifeCycle.svelte';
  import BasicUi from './first components/BasicUi.svelte';
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
  let displayToggler = !false;

  let dispatchedTxt = '';
  const recievTXTfromChild = (e) => {
    dispatchedTxt = e.detail.txt;
  };

  const toggleDisplayToggler = () => {
    displayToggler = !displayToggler;
  };
</script>

<button class="mb-3" on:click={toggleDisplayToggler}
  >{displayToggler ? 'hide' : 'display'}</button
>
<div>
  <p>{dispatchedTxt}</p>

  {#if displayToggler}
    <BasicUi
      on:info-dispatch={recievTXTfromChild}
      on:close-modal={toggleDisplayToggler}
      number="1"
    />
  {/if}
</div>

<!-- 
  <Slots on:info-dispatch={newFunction} number="2">
    <h2>slot 2</h2>
  </Slots>
  <Slots on:info-dispatch={newFunction} number="3">
    <h2>slot 3</h2>
  </Slots>
  <Slots on:info-dispatch={newFunction} number="4">
    <h2>slot 4</h2>
  </Slots>

  <PersonalizedEvents on:info-dispatch={newFunction} />
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
