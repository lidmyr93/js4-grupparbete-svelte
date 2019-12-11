<script>
  import Icon from "fa-svelte";
  import { faBeer } from "@fortawesome/free-solid-svg-icons/faBeer";
  import { Link } from "@c0ldra1n/svero";
  import { beers } from "./stores";
  import { onDestroy } from "svelte";

  let numberOfBeers;
  const beerSubscription = beers.subscribe(val => (numberOfBeers = val.beers.length));
  onDestroy(beerSubscription);
</script>

<style>
  header {
    margin: 0 auto;
    padding-top: 24px;
    max-width: 1000px;
  }
  nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .logo {
    color: gold;
    font-size: 5em;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .logotext {
    font-family: 'Lilita One', cursive;
    margin-left: 24px;
  }
  ul {
    display: flex;
    list-style-type: none;
    justify-content: space-evenly;
    align-items: center;
    font-size: 2em;
    padding-left: 0;
    margin: 0;
  }
  li:not(:last-of-type):after { 
    content: '|'; 
    margin: 0 10px;
  }
</style>

<header>
  <nav>
    <Link class="logolink" href="/index">
      <span class="logo">
        <Icon icon={faBeer} />
        <span class="logotext">Brewdog Beer Collector</span>
      </span>
    </Link>
    <ul>
      <li>
        <Link href="/index">Find beers</Link>
      </li>
      <li>
        <Link href="/fridge">Fridge</Link>
        ({numberOfBeers})
      </li>
    </ul>
  </nav>
  <hr />
</header>
