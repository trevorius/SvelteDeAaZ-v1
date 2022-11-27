<script>
  //stores
  import storeData from './stores/store';
  import { onDestroy } from 'svelte';
  let content;
  //subscribe  gets data don't forget to unsubscribe from memory on destroy
  let cleanstorData = storeData.subscribe((value) => {
    content = value;
  });

  // onDestroy(() => {
  //   if (cleanstorData) cleanstorData();
  // });

  // /*set changes the value*/
  // storeData.set('lorem ipsum');
  // /*set updates the value based on current value*/
  // storeData.update((val) => val + ' content');

  //components
  import PersonalizedEvents from './first components/PersonalizedEvents.svelte';
  import Slots from './first components/Slots.svelte';
  import LifeCycle from './first components/LifeCycle.svelte';
  import NavBar from './first components/NavBar.svelte';
  import BasicModal from './first components/BasicModal.svelte';
  import Tabs from './first components/Tabs.svelte';
  import Events from './first components/events.svelte';
  import Reactivity from './first components/Reactivity.svelte';
  import Form from './first components/Form.svelte';
  import CountryList from './first components/ListIterations.svelte';
  import DisplayToggler from './first components/DisplayToggler.svelte';
  import Counter from './first components/Counter.svelte';
  import { subscribe } from 'svelte/internal';

  let counterProps = {
    counter: 0,
    min: 20,
    max: 70,
    incrementValue: 5,
  };
  let countries = ['France', 'England', 'Deutchland', 'Espana'];
  let displayToggler = false;

  let dispatchedTxt = '';
  const recievTXTfromChild = (e) => {
    dispatchedTxt = e.detail.txt;
  };

  const toggleDisplayToggler = () => {
    displayToggler = !displayToggler;
  };
</script>

<div class="content">
  <p>{content}</p>
</div>

<!-- 
  <NavBar />
  
  <button class="mb-3" on:click={toggleDisplayToggler}
    >{displayToggler ? 'hide' : 'display'}</button
  >
  
  <div class="content">
    <Tabs />
  </div>
  
  <div>
    {#if displayToggler}
      <BasicModal
        on:info-dispatch={recievTXTfromChild}
        on:close-modal={toggleDisplayToggler}
        number="1"
      />
    {/if}
  </div>

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
  
  <CountryList {countries} />
  
  <Counter {...counterProps} />
  
  <DisplayToggler /> -->
