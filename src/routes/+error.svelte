<script>
   import { page } from "$app/stores";
</script>

<section>
  <p class="text-5xl font-bold">YIKES!! 🧨</p>
  <p class="text">Something went horribly wrong but the blust radius has been contained in this router.</p>
  <pre>
    {JSON.stringify($page, null, 2)}
  </pre>
</section>

<style>
  .text {
    padding-left: 3rem;
    font-size: 1.5rem;
    width: 70%;
    margin: 1rem;
  }

  pre {
    background-color: rgba(119, 136, 153, 0.377);
  }
</style>
