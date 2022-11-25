<script>
  // find events list here : https://developer.mozilla.org/en-US/docs/Web/Events

  let sampleParagraph = '';
  let text = '';
  let formData = {
    text: '',
  };
  let counter = 0;

  const submitForm = () => {
    text = formData.text;
  };
  const hover = () => {
    let element = document.getElementById('hover-element');
    element.classList.add('red');
  };
  const unHover = () => {
    let element = document.getElementById('hover-element');
    element.classList.remove('red');
  };

  const clickMeOnce = () => {
    counter++;
    sampleParagraph += ` you clicked me ${counter}`;
  };
</script>

<div>
  <h2 id="hover-element" on:mouseenter={hover} on:mouseleave={unHover}>
    Lorem ipsum dolor sit amet.
  </h2>
  <p>
    {sampleParagraph} &nbsp;
  </p>
  <p>
    {text}
  </p>
</div>

<button class="mb-2" on:click|once={clickMeOnce}>click me </button>
<form class="mb-2" on:submit|preventDefault={submitForm}>
  <input type="text" bind:value={formData.text} />
  <button type="submit">submit</button>
</form>

<!-- propagation will happen if triggering child event whose parent has the same event -->

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="box" on:click={clickMeOnce}>
  <p on:click|stopPropagation={clickMeOnce}>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  </p>
</div>

<!-- click event triggered by parent component App.svelte -->
<div>
  <p>Child element</p>
</div>
<button on:click>Click child</button>

<style>
  .box {
    margin-top: 2rem;
    width: 25%;
    height: 25rem;
    background-color: orange;
  }
  .box p {
    background-color: blue;
    color: white;
  }
</style>
