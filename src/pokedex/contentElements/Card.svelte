<script>
  export let name, nameFr, image;
</script>

<div class="card">
  <p class="name">{name}</p>
  <p class="name">FR: {nameFr.name}</p>
  <img src={image} alt="{name} image" />
</div>

<style>
  .card {
    width: 300px;
    height: 250px;
    background: rgba(238, 130, 238, 0.23);
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    justify-content: center;
    margin: 5px;
  }
  .card img {
    width: 100px;
  }
  .card p {
    font-size: 20px;
  }
</style>
