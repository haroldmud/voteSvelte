<script>
  import { page } from "$app/stores";
  $:  routeId  = $page.route.id
</script>

<header>
  <div class="bg-gray-600 py-10 opacity-20">
    <a href="/">
      <h1 class="font-bold text-5xl opacity-30= text-pink-100">PREFERENCES</h1>
    </a>
  </div>
 <nav class="bg-blue-300 flex justify-center gap-4">
   <a class="font-bold" class:active={routeId === '/'} href="/">Vote</a>
    <a class="font-bold" class:active={routeId === '/todo'} href="/todo">Tasks</a>
  </nav>
</header>

<style lang="postcss">
  nav a.active {
    color: #2563eb;
    font-weight: bold;
  }
</style>
