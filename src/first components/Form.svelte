<script>
  let country = '';
  let city = '';
  let formData = {
    country: '',
    city: '',
  };
  const addCountry = (e) => {
    formData.country = e.target.value;
    console.log(country);
  };
  const sendData = (e) => {
    e.preventDefault();
    country = formData.country;
    city = formData.city;
  };
</script>

<div class="container">
  <form on:submit={sendData}>
    <div class="mb-3 form-group">
      <label for="country" class="form-label">Country </label>
      <input
        on:input={addCountry}
        value={formData.country}
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
    <div class="mb-3 form-group">
      <label for="city" class="form-label">City</label>
      <input
        bind:value={formData.city}
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

    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</div>
