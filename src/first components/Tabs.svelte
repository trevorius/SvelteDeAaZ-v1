<script>
  let tabToggler = 1;
  const toggleTabs = (index) => {
    tabToggler = index;
  };
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="tab-box">
  <div class="selectors">
    <div on:click={() => toggleTabs(1)} class="selector s1">Tab 1</div>
    <div on:click={() => toggleTabs(2)} class="selector s2">Tab 2</div>
  </div>
  <div class={tabToggler === 1 ? 'content visible' : 'content'}>
    <h2>Content 1</h2>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem
      distinctio, ratione temporibus soluta voluptatum earum, non, veniam nisi
      expedita numquam ut totam itaque hic magnam.
    </p>
  </div>
  <div class={tabToggler === 2 ? 'content visible' : 'content'}>
    <h2>Content 2</h2>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem
      distinctio, ratione temporibus soluta voluptatum earum, non, veniam nisi
      expedita numquam ut totam itaque hic magnam.
    </p>
  </div>
</div>

<style>
  .tab-box {
    border: 1px solid #333;
    max-width: 500px;
    margin: 100px auto;
  }

  .selectors {
    display: flex;
  }
  .selector {
    text-align: center;
    cursor: pointer;
    width: 50%;
    background-color: grey;
    color: white;
    height: 3rem;
    line-height: 3rem;
    transition: color 500ms;
  }
  .selector:hover {
    filter: brightness(125%);
    color: black;
    transition: color 500ms;
  }
  .s1 {
    border-right: 1px solid #000;
  }
  .s2 {
    border-left: 1px solid #000;
  }

  .content {
    display: none;
    padding: 2rem;
    min-height: 15rem;
    overflow: hidden;
  }
  .visible {
    display: block;
  }
</style>
