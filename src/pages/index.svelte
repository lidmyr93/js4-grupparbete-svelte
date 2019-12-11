<script>
  import Spinner from "../components/Spinner.svelte";
  import BeerInfo from "../components/BeerInfo.svelte";
  import Button from "../components/Button.svelte";
  import getBeer from "../utils/getBeer";
  import addBeer from "../utils/addBeer";

  let getRandomBeer = getBeer();
</script>

<style>
  .container { 
    max-width: 1000px; 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 50vh;
  }
  .controls { justify-self: flex-start; }
  hr { width: 100%; }
</style>

<div class="container">
  {#await getRandomBeer}
    <Spinner />
  {:then res}
    <div class="controls">
      <Button onClick={() => (getRandomBeer = getBeer())}>Find new beer</Button>
      <Button onClick={() => addBeer(res)}>Put beer in fridge</Button>
    </div>
    <hr />
    <BeerInfo data={res} />
  {:catch err}
    <p>{err.error}</p>
  {/await}
</div>