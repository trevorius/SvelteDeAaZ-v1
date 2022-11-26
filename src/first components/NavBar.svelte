<script>
  // HTML entities https://www.freeformatter.com/html-entities.html or here https://graphemica.com/
  import { onMount } from 'svelte';

  let menuToggler = false;
  const toggleResponsiveMenu = () => {
    menuToggler = !menuToggler;
  };
  const resetMenu = () => {
    menuToggler = false;
  };

  onMount(() => {
    const mediaListener = window.matchMedia('(max-width:750px)');
    mediaListener.addEventListener('resize', (e) => resetMenu());
  });
</script>

<nav>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div class="logo" on:click={toggleResponsiveMenu}>
    <div>&#9776;</div>
  </div>
  <ul class={menuToggler ? 'nav-list visible' : 'nav-list'}>
    <li class="nav-item">
      <a href="#">lorem 1</a>
    </li>
    <li class="nav-item">
      <a href="#">lorem 2</a>
    </li>
    <li class="nav-item">
      <a href="#">lorem 3</a>
    </li>
    <li class="nav-item">
      <a href="#">lorem 4</a>
    </li>
    <li class="nav-item">
      <a href="#">lorem 5</a>
    </li>
    <li class="nav-item">
      <a href="#">lorem 6</a>
    </li>
  </ul>
</nav>

<style>
  nav {
    height: 5em;
    width: 100%;
    background: #333;
    position: relative;
  }
  .logo {
    color: #fff;
    display: none;
    font-size: 2em;
    position: absolute;
    left: 0.75em;
    top: 0.3em;
  }
  .nav-list {
    height: 100%;
    list-style-type: none;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
  }
  .nav-list li a {
    color: #fff;
    text-decoration: none;
    margin: 0 0.75em;
    font-size: 1.25em;
  }

  @media only screen and (max-width: 750px) {
    .logo {
      display: block;
    }
    .nav-list {
      flex-direction: column;
      position: relative;
      top: 6em;
      display: none;
    }
    .nav-list.visible {
      display: flex;
    }
    .nav-item {
      width: 100vw;
      background-color: #333;
      text-align: center;
      padding: 10px 0;
    }
  }
</style>
