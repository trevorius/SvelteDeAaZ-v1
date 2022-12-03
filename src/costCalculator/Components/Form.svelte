<script>
  import { createEventDispatcher } from 'svelte';
  let newExpense = {
    name: '',
    cost: '',
  };
  const dispatch = createEventDispatcher();

  const addExpense = () => {
    dispatch('sendExpenseToParent', { newExpense: newExpense });
  };
</script>

<form on:submit|preventDefault={addExpense} action="" class="my-5">
  <div class="form-group">
    <label for="expense" class="lead fw-bold"> Expense name </label>
    <input
      type="text"
      id="expense"
      class="form-control"
      placeholder=" Enter a new expense"
      bind:value={newExpense.name}
    />
  </div>
  <div class="form-group">
    <label for="amount" class="lead fw-bold"> Amount</label>
    <input
      type="number"
      id="amount"
      class="form-control"
      placeholder=" Enter  the amount"
      bind:value={newExpense.cost}
    />
  </div>
  <button type="submit" class="btn btn-primary m-2">Add the expense</button>
</form>
