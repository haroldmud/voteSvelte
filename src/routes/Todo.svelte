<script lang="ts">
  
   import { tasks } from "./store";
   let them: string[];
   tasks.subscribe(prev => them = prev)
   console.log($tasks)
  </script>

  {#if them}
    <section class="border w-[32rem] mx-auto">
      {#each them as tasks}
        <h2>{tasks}</h2>
      {/each}
    </section>
  {/if}
