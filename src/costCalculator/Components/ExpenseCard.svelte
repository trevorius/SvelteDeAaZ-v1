<script>
  export let name, amount;
  name = name ? name : 'Car';
  amount = amount ? amount : '200';
</script>

<div class="card my-2">
  <div class="card-body">
    <h3>{name}</h3>
    <p>{amount}</p>
    <i class="trash">
      <img src="assets/image/trash-solid.svg" alt="" />
    </i>
  </div>
</div>

<style>
  .card {
    position: relative;
  }
  .card h3 {
    font-size: 35px;
  }
  .card p {
    font-weight: 300;
    font-size: 25px;
  }
  i {
    cursor: pointer;
  }
  i img {
    width: 30px;
  }
  .trash {
    position: absolute;
    top: 10px;
    right: 20px;
  }
</style>
