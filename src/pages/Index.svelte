<script>
  import { onMount } from "svelte";

  let beer = {};

  const getRandomBeer = async () => {
    return fetch("https://api.punkapi.com/v2/beers/random")
      .then(res => (res.status === 200 ? res.json() : new Error()))
      .then(data => {
        beer.imgUrl = data[0].image_url;
        console.log(beer);
      })
      .catch("Något gick fel");
  };

  onMount(getRandomBeer);
</script>

<style>

</style>

<h1>Öl</h1>
<img src={beer.imgUrl} alt="" />
