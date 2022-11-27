<script>
  import storeData from '../stores/lightDark';

  let toggler;

  storeData.subscribe((value) => {
    toggler = value;
  });
  const toggleScreen = () => {
    storeData.set(!toggler);
  };
</script>

<button
  on:click={toggleScreen}
  class={toggler ? 'btn-toggle go-light' : 'btn-toggle go-dark'}
  type="button"
>
  {toggler ? 'go light' : 'go dark'}</button
>

<style>
  .btn-toggle {
    width: 5em;
    height: 4em;
    border-radius: 50%;
    /* background-color: #333; */
    /* color: #f1f1f1; */
    outline: none;
    position: absolute;
    top: 1em;
    right: 1em;
    cursor: pointer;
  }
</style>
