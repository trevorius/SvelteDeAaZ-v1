<script>
  let val1 = 100;
  let val2 = 300;
  let val3 = 150;

  let total = val1 + val2 + val3;

  const updateVal3 = () => {
    val3 = 600;
  };

  // $: is used to check state and it's line will run on state change
  $: ReactiveTotal = val1 + val2 + val3;

  // Dom is only updated when variables are updated using `=` this means that for arrays and other types that can be modified through methods workaround need to be found ex:

  let array = [1, 2, 3, 4];
  function push5ToArray() {
    // array.push(5); // this won't update DOM
    //instead use spread operator :
    array = [...array, 5];
  }
</script>

<h2>{array}</h2>
<h2>{total}</h2>
<h2>{ReactiveTotal}</h2>
<h4>{val3}</h4>

<button type="button" class="btn btn-primary" on:click={updateVal3}>
  update value
</button>
<button type="button" class="btn btn-primary" on:click={push5ToArray}
  >push 5 to array</button
>
