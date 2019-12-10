<script>
  import FridgeItem from "../FridgeItem.svelte";
  import { beers } from "../stores";
  import { onDestroy } from "svelte";

  let beerList;
  const beerSubscription = beers.subscribe(val => beerList = val.beers);
  onDestroy(beerSubscription);
</script>

<style>
  .container {
    max-width: 1000px;
    width: 1000px;
    display: grid;
    grid-gap: 24px;
    grid-template-columns: 1fr 1fr;
  }
  p { 
    text-align: center; 
    grid-column: 1 / 3;
  }
</style>

<div class="container">
  {#if beerList.length}
    {#each beerList as beer, i (beer.key)}
      <FridgeItem data={beer} key={beer.key} />
    {/each}
  {:else}
    <p>The fridge is empty!</p>
  {/if}
</div>