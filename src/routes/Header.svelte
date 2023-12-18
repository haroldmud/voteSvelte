<script>
  import { page } from "$app/stores";
  $:  routeId  = $page.route.id
</script>

<header>
  <div class="bg-blue-200 py-10 opacity-20">
    <a href="/">
      <h1 class="font-bold text-5xl opacity-30= text-pink-100">PREFERENCES</h1>
    </a>
  </div>
 <nav class="bg-blue-900 flex justify-center gap-4 text-white">
   <a class="font-bold" class:active={routeId === '/'} href="/">Vote</a>
    <a class="font-bold" class:active={routeId === '/todo'} href="/todo">Tasks</a>
  </nav>
</header>

<style lang="postcss">
  nav a.active {
    text-decoration: underline;
    font-weight: bold;
  }
</style>
