<script>
  import { Router, Route } from "@c0ldra1n/svero";
  import Index from "./pages/Index.svelte";
  import Fridge from "./pages/Fridge.svelte";
  import Header from "./Header.svelte";
</script>

<style>
  :global(body) {
    margin: 0;
    padding: 0;
  }
  .container {
    max-width: 1000px;
    margin: 0 auto;
  }
</style>

<Header />
<div class="container">
  <Router>
    <Route path="*" component={Index} />
    <Route path="/fridge" component={Fridge} />
  </Router>
</div>
