<script>
  export let countries = [
    'France',
    'England',
    'Deutchland',
    'Espana',
    'Italia',
  ];
</script>

<ul>
  {#each countries as country, index}
    <li>
      #{index + 1}
      {country}
    </li>
  {/each}
</ul>
