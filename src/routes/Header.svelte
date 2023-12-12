<script>
  import { page } from "$app/stores";
  import { setContext } from "svelte";
  export let message = 'hello world';
  let routeId;
  routeId = $page.route.id
  setContext('thisKey', message)

</script>

<header>
  <div class="bg-gray-600 py-10 opacity-20">
    <a href="/">
      <h1 class="font-bold text-5xl opacity-30= text-pink-100">PREFERENCES</h1>
    </a>
  </div>
 <nav class="bg-blue-300 flex justify-center gap-4">
   <a class="font-bold" href="/">Vote</a>
    <a class="font-bold" href="/todo">Tasks</a>
  </nav>
</header>

<style lang="postcss">
</style>
