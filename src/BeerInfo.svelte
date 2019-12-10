<script>
  export let data;
  const {
    image_url: img,
    name,
    tagline,
    description,
    abv,
    ibu,
    first_brewed: firstBrewed
  } = data;
  const noImg = "../noimage.svg";
</script>

<style>
  .beer-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 50px;
    padding: 50px;
    width: 100%;
    height: 100%;
    background-color: #fafafa;
    border-radius: 4px;
    box-shadow: 0 1px 1px rgba(125, 125, 125, 0.12), 
                0 2px 2px rgba(125,125,125, 0.12);
  }
  .beer-image {
    display: block;
    max-height: 50vh;
    max-width: 100%;
    justify-self: center;
  }
  h2 {
    margin-bottom: 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1em;
  }
</style>

<div class="beer-container">
  <img src={img || noImg} alt={name} class="beer-image" />
  <div class="beer-text">
    <h2>{name}</h2>
    <i>{tagline}</i>
    <p>{description}</p>
    <ul>
      <li>
        <b>First brewed:</b>
        <span>{firstBrewed}</span>
      </li>
      <li>
        <b>ABV:</b>
        <span>{abv}</span>
      </li>
      <li>
        <b>IBU:</b>
        <span>{ibu}</span>
      </li>
    </ul>
  </div>
</div>
