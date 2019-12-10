<script>
  import Spinner from "../Spinner.svelte";
  import BeerInfo from "../BeerInfo.svelte";
  import { getBeer } from "../utils/api-utils";
  import { beers } from "../stores";
  import { setContext } from "svelte";

  let getRandomBeer = getBeer();
  const addBeer = beer => beers.update(n => [beer, ...n]);
</script>

<style>
  .container {
    max-width: 1000px;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 50vh;
  }
</style>

<div class="container">

  {#await getRandomBeer}
    <Spinner />
  {:then res}
    <div>
      <button on:click={() => (getRandomBeer = getBeer())}>Slumpa ny öl</button>
      <button on:click={() => addBeer(res)}>Spara öl</button>
    </div>
    <BeerInfo data={res} />
  {:catch err}
    <p>{err.error}</p>
  {/await}

</div>
