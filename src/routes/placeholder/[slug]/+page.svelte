<script lang="ts">
  import { page } from "$app/stores";
  const postId: any = $page.params.slug;
  import { onMount } from "svelte";
  let post: any;
  let load: boolean = true;
  let error: boolean = false;
  
  onMount(async function() {
    try{
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${postId}`);
      const data = await response.json();
      if(response.ok) {
        post = data.title;
        load = false
      }else {
        load = false;
        error = true;
        throw new Error('Failed to fetch the data'); 
      }
    }catch(error){
      console.error('an error occured:', error)
      throw new Error('Failed to fetch the data');
    }
  })
</script>

<section>
  {#if load}
  <div class="border p-12">
    <span class="animate-ping inline-flex h-5 w-20 opacity-15">loading...</span>
  </div>
    {:else if error}
    <h2>An error occured</h2>
    {:else}
    <h1 class="text-7xl font-bold p-auto w-full h-full">Welcome to {post}</h1>
  {/if}
</section>
