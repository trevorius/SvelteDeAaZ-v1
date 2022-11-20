<script>
  let defaultCat = {
    weight: 0,
    color: 'red',
    race: 'bastard',
    age: 0,
    name: 'mittens',
  };
  export let title = 'default';
  export let lorem;
  export let name = defaultCat.name;
  export let weight = defaultCat.weight;
  export let color = defaultCat.color;
  export let race = defaultCat.race;
  export let age = defaultCat.age;
</script>

<h2>{title}</h2>
<ul>
  <li>Name: {name}</li>
  <li>Weight: {weight} kg</li>
  <li>Race: {race}</li>
  <li style="color:{color};">Color: {color}</li>
  <li>Age: {age} yrs</li>
  <li>{lorem}</li>
</ul>

<style>
  h2 {
    color: blue;
  }
</style>
