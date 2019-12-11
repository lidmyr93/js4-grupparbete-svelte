<script>
  import Button from "../components/Button.svelte";
  import removeBeer from "../utils/removeBeer";
  import { navigateTo } from "@c0ldra1n/svero";
    
  export let data;
  export let key;
      
  const { id, image_url, name, tagline } = data;
  const noImg = "noimage.svg";
</script>

<style>
  .item {
    width: 100%;
    background-color: #fafafa;
    border-radius: 4px;
    padding: 24px;
    display: flex;
    box-shadow: 0 1px 1px rgba(125, 125, 125, 0.12),
                0 2px 2px rgba(125, 125, 125, 0.12);
  }
  .beer-img {
    text-align: center;
    width: 150px;
    height: 150px;
  }
  .beer-img img {
    max-height: 100%;
    max-width: 100%;
  }
  .desc {
    display: flex;
    flex-direction: column;
    padding-left: 24px;
    flex: 1;
  }
  h2 { margin: 0; }
  .tagline {
    margin-top: 8px;
    font-style: italic;
    font-weight: bold;
  }
  .buttons {
    display: grid;
    grid-gap: 12px;
  }
</style>

<div class="item">
  <div class="beer-img">
    <img src={image_url || noImg} alt={name} />
  </div>
  <div class="desc">
    <h2>{name}</h2>
    <p class="tagline">{tagline}</p>
    <div class="buttons">
      <Button onClick={() => navigateTo(`/beer/${id}`)}>Read more</Button>
      <Button onClick={() => removeBeer(key)} type="delete">Delete</Button>
    </div>
  </div>
</div>