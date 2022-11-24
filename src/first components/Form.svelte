<script>
  let country = '';
</script>

<div class="container">
  <div class="mb-3 form-group">
    <label for="country" class="form-label">Country </label>
    <input
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
