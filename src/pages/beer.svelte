<script>
  import Spinner from "../Spinner.svelte";
  import BeerInfo from "../components/BeerInfo.svelte";
  import Button from "../components/Button.svelte";
  import { get } from "svelte/store";
  import { beers } from "../stores";

  export let router = {};
  router.params;
  const id = Number(router.params.id);
  const beer = get(beers).beers.find(beer => beer.id === id); 
</script>

<style>
  .container { max-width: 1000px; }
  p { text-align: center; }
</style>

<div class="container">
  {#if beer}
    <BeerInfo data={beer} />
  {:else}
    <p>The beer you are looking for is not in the fridge.</p>
  {/if}
</div>
