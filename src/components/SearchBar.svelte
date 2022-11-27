<script></script>

<form class="form-search">
  <label for="search">Chouse a Pakemon</label>
  <input type="text" id="search" placeholder=" search for pokemeon" />
  <button type="submit">submit</button>
</form>

<style>
  .form-search {
    margin: 150px auto 50px auto;
    max-width: 1100px;
    padding: 0 50px;
    display: flex;
    align-content: center;
    flex-direction: column;
  }
  .form-search label,
  .form-search input {
    max-width: 1100px;
  }
  .form-search label {
    font-size: 25px;
    border: none;
    padding: 10px 0;
  }
  .form-search input {
    font-size: 20px;
    padding: 20px;
    background: rgb(240, 197, 240);
  }
  form button {
    padding: 15px 30px;
    background: violet;
    border: none;
    outline: none;
    cursor: pointer;
    margin-top: 5px;
    font-size: 18px;
    margin-right: auto;
  }
</style>
