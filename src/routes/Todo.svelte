<script lang="ts">
  import Icon from "@iconify/svelte"
  import { tasks } from "./store";
  import { lined } from "./store";
  import type { Itodo } from "./store";
  let todo: Itodo[] | any;
  let line: boolean;
  lined.subscribe(prev => line = prev)
  tasks.subscribe(prev => todo = prev)

  function handleLined(id: number) {
    tasks.update(prev => prev.map((item: Itodo, idx): any => {
      if(id === idx) {
        item.completed = !item.completed
      }
      return item
    }))
  }

  
  function handleDelete(id: number) {
    tasks.update(todo.filter((_item: any, idx: any) => {
      idx !== id 
    }))
  }
</script>

  {#if todo}
    <section class="border w-[32rem] mx-auto">
      {#each todo as tasks, i (i)}
      <div class="flex border bg-blue-100 p-2 justify-between">
        <div class="h-fit my-auto flex gap-2">
          <button on:click={()=>handleLined(i)}>
            {#if tasks.completed}
              <Icon class="my-auto" icon="simple-line-icons:check"/>
            {:else}
              <Icon icon="cil:circle"/>
            {/if}
          </button>
          <h2 class={`${tasks.completed ? 'line-through' : ''}`}>{tasks.task}</h2>
        </div>
        {#if tasks.completed}
          <div class="flex gap-1 my-auto">
            <button on:click={()=> handleDelete(i)}>
              <Icon icon="dashicons:edit"/>
            </button>
            <button>
              <Icon icon="tabler:trash-x"/>
            </button>
          </div>
        {/if}
      </div>
      {/each}
    </section>
  {/if}
