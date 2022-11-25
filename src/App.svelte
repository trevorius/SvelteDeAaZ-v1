<script>
  import PersonalizedEvents from './first components/PersonalizedEvents.svelte';
  import Slots from './first components/Slots.svelte';
  import LifeCycle from './first components/LifeCycle.svelte';
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
  let dispatchedTxt = '';
  const newFunction = (e) => {
    dispatchedTxt = e.detail.txt;
  };
</script>

<div>
  <p>parent element : {dispatchedTxt}</p>
  <LifeCycle on:info-dispatch={newFunction} number="1">
    <h2>slot 1</h2>
    <div class="card-title  mb-2" slot="content">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores,
      assumenda. Aut culpa modi alias nemo at, distinctio non accusantium ullam
      sunt consectetur praesentium! Recusandae, neque.
    </div>
    <p class="card-footer text-muted" slot="footer">footer 1</p>
  </LifeCycle>
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
