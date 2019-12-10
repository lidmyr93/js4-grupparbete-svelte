<script>
  import { Router, Route } from "@c0ldra1n/svero";
  import index from "./pages/index.svelte";
  import fridge from "./pages/fridge.svelte";
  import beer from "./pages/beer.svelte";
  import Header from "./Header.svelte";
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Bebas+Neue|Lilita+One&display=swap');
  :global(*) {
    box-sizing: border-box;
  }
  :global(body) {
    margin: 0;
    padding: 0;
  }
  :global(hr) {
    margin: 24px 0;
  }
  .container {
    max-width: 1000px;
    margin: 0 auto 100px auto;
  }
</style>

<Header />
<div class="container">
  <Router>
    <Route exact path="/" component={index} />
    <Route path="/fridge" component={fridge} />
    <Route path="/beer/:id" component={beer} />
  </Router>
</div>
