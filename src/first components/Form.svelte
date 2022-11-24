<script>
  let country = '';
  let city = '';
  const addCountry = (e) => {
    country = e.target.value;
    console.log(country);
  };
</script>

<div class="container">
  <form>
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
        >enter yor country of residence here: {country}
      </small>
    </div>
  </form>

  <form>
    <div class="mb-3">
      <label for="city" class="form-label">City</label>
      <input
        bind:value={city}
        type="text"
        name="city"
        id="city"
        class="form-control"
        placeholder="City of residence"
        aria-describedby="helpCity"
      />
      <small id="helpCity" class="text-muted"
        >enter you city of residence current is : {city}
      </small>
    </div>
  </form>
</div>
