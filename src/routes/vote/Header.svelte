<script lang="ts">
  import { page } from "$app/stores";
  export let create: string | null;
  $:  routeId  = $page.route.id
</script>

<header>
  <nav class=" flex justify-center gap-4 mt-5">
    <a class="font-thin text-3xl hover:no-underline" class:active={routeId === '/'} href="/">Current</a>
    <a class="font-thin text-3xl hover:no-underline" class:active={routeId === create} href="/new">Add choice</a>
  </nav>
</header>

<style lang="postcss">
  nav a.active {
    color: rgb(240, 129, 148);
    border-bottom: solid rgb(240, 129, 148) 2px;
  }
</style>
