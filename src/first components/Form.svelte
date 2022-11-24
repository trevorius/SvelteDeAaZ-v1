<script>
  let country = '';
  const addCountry = (e) => {
    country = e.target.value;
    console.log(country);
  };
</script>

<div class="container">
  <div class="mb-3 form-group">
    <label for="country" class="form-label">Country </label>
    <input
      on:input={addCountry}
      value={country}
      type="text"
      name="country"
      id="country"
      class="form-control"
      placeholder="enter your country"
      aria-describedby="country__help"
    />
    <small id="country__help" class="text-muted"
      >enter yor country of residence here
    </small>
  </div>
</div>
