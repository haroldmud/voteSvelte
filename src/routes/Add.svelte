<script lang="ts">
  import { tasks } from "./store";
  // import { task } from "./store";
  let value='';
  let array: any;
  tasks.subscribe(prev => array= prev)

  /**
   * @param {any} item
   */
  function handleAdd(item: any) {
    if(value || !array.includes(item)){
      tasks.update((prev) => [item, ...prev] )
    }
    console.log(array)
  }

  function handleReset() {
    value = ''
  }
  
</script>

<section>
  <form class="mx-auto w-fit " action="">
    <input bind:value class="w-[30rem] bg-slate-200 pl-3 p-2 border border-b-2 border-blue-300 placeholder:italic text-xs outline-none" placeholder="enter your task" type="text">
    <button class="bg-blue-400 p-2 rounded-sm font-bold text-white cursor-pointer" on:click={()=>{handleAdd(value); handleReset()}}>Add</button>
  </form>
</section>
