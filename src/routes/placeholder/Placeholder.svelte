<script lang="ts">
  import { onMount } from "svelte";

  let posts: any = [];
  let load: boolean = true;
  let offline: boolean = false;

  onMount(async function() {
    try{
      if(navigator.onLine) {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await response.json();
        if(response.ok) {
          load = false;
          posts = data.slice(0, 10);
        }
        if(!response.ok) {
          load = false
          console.error("something wrong happened")
        }
      } else {
        load = false
        offline = true
        console.error("You appear to be offline")
      }
    }catch (error) {
      console.error('An error occured during the request:', error)
    }
  })
</script>

<section>
  <h1 class="hold">PLACEHOLDER</h1>
  {#if load}
  <div class="p-12">
    <span class="animate-ping inline-flex h-5 w-20 opacity-15">loading...</span>
  </div>
  {:else if offline}
  <div class="text-5xl">Oops! No internet</div>
  {:else}
  <div class="flex flex-col">
    {#each posts as articles}
      <a  data-testid="post-link" href="/placeholder/{articles.id}" class="border w-6/12 my-2 bg-slate-300 p-1 rounded-lg hover:no-underline">{articles.title}</a>
    {/each}
  </div>
  {/if}
</section>
