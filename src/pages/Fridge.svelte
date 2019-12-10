<script>
  import { onDestroy } from "svelte";
  import { getContext } from "svelte";
  import { get } from "svelte/store";
  import { beers } from "../stores";

  const beerList = get(beers);
  console.log(beerList);
</script>

<style>

.container{
    display: flex;
    flex-wrap: wrap;
}

.item{

}

</style>

<div class="container">
  {#each beerList as beer}
<div class="item">
<img src={beer.image_url}>
<h2>{beer.title}</h2>
  {/each}
</div>
