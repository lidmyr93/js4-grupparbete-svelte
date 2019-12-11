<script>
  export let type = 'primary';
  export let onClick;
</script>

<style>
  .btn {
    display: inline-block;
    margin: 0;
    padding: 6px 12px;
    border: none;
    outline: none;
    border-radius: 4px;
    cursor: pointer;
  }

  .delete {
    background-color: rgba(231, 76, 60, 1);
    color: #fff;
  }
  .delete:focus { background-color: rgba(231, 76, 60, 0.5); }

  .primary {
    background-color: rgba(255, 215, 0, 1);
    color: #333;
  }
  .primary:focus { background-color: rgba(255, 215, 0, 0.5); }
  
</style>

<button class={`btn ${type}`} on:click={onClick}><slot /></button>