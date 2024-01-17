<script>
  import { page } from "$app/stores";
  import UserIcon from "./images/user.png" 
  $:  routeId  = $page.route.id
</script>

<header>
  <div class="bg-blue-200 py-10 opacity-80 flex justify-between px-12">
    <a class="w-fit text-5xl font-bold italic hover:no-underline" href="/">
      XO
    </a>
    <a class="h-fit my-auto" href="/login"><img width="50" height="50" src={UserIcon} alt=""></a>
  </div>
 <nav class="bg-blue-900 flex justify-center gap-4 text-white">
    <a class="font-bold" class:active={routeId === '/'} href="/">Vote</a>
    <a class="font-bold" class:active={routeId === '/todo'} href="/todo">Tasks</a>
    <a class="font-bold" class:active={routeId === '/placeholder'} href="/placeholder">Posts</a>
  </nav>
</header>

<style lang="postcss">
  nav a.active {
    text-decoration: underline;
    font-weight: bold;
  }
</style> 
