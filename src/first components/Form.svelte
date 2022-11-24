<script>
  let country = '';
  let city = '';
  let age = '';
  let weight = '';
  let message = '';
  let formData = {
    country: '',
    city: '',
    age: '',
    weight: '',
    message: '',
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
    message = formData.message;
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
        aria-describedby="country__value"
      />
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
        aria-describedby="city__value"
      />
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
        aria-describedby="age__value"
      />
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
        aria-describedby="weight__value"
      />
    </div>

    <div class="mb-3">
      <label for="message" class="form-label">Message</label>
      <textarea
        bind:value={formData.message}
        class="form-control"
        name="message"
        id="message"
        aria-describedby="message__value"
      />
    </div>

    <button type="submit" class="btn btn-primary">Submit</button>
  </form>

  <h3 id="country__value" class="text-muted">
    country of residence here: {country}
  </h3>
  <h3 id="city__value" class="text-muted">
    city of residence current is : {city}
  </h3>
  <h3 id="age__value" class="text-muted">
    your age is : {age}
  </h3>
  <h3 id="weight__value" class="text-muted">
    your weight : {weight} lb
  </h3>
  <hr />
  <p id="message__value">
    {message}
  </p>
</div>
