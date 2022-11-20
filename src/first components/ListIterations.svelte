<script>
  export let countries = [
    'France',
    'England',
    'Deutchland',
    'Espana',
    'Italia',
  ];
  let countriesWithKeys = [];
  countries.forEach((countryName, index) => {
    countriesWithKeys.push({ id: index, name: countryName });
  });
</script>

<ul>
  {#each countries as country, index}
    <li>
      #{index + 1}
      {country}
    </li>
  {/each}
</ul>

<ul>
  {#each countriesWithKeys as countryObject}
    <li>
      id: {countryObject.id}
      name: {countryObject.name}
    </li>
  {/each}
</ul>
