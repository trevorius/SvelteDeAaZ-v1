<script>
  let country = '';
  let city = '';
  let age = '';
  let weight = '';
  let formData = {
    country: '',
    city: '',
    age: '',
    weight: '',
  };
  const addCountry = (e) => {
    formData.country = e.target.value;
    console.log(country);
  };
  const sendData = (e) => {
    e.preventDefault();
    country = formData.country;
    city = formData.city;
    age = formData.age;
    weight = formData.weight;
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
    <div class="mb-3">
      <label for="age" class="form-label">Age</label>
      <input
        bind:value={formData.age}
        type="number"
        name="age"
        id="age"
        class="form-control"
        placeholder=""
        aria-describedby="age__help"
      />
      <small id="age__help" class="text-muted">your age is : {age}</small>
    </div>
    <div class="mb-3">
      <label for="weight" class="form-label"
        >Weight : {formData.weight} lb</label
      >
      <input
        bind:value={formData.weight}
        type="range"
        min="6"
        max="500"
        name="weight"
        id="weight"
        class="form-control"
        placeholder=""
        aria-describedby="weight__help"
      />
      <small id="weight__help" class="text-muted"
        >your weight : {weight} lb</small
      >
    </div>

    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</div>
