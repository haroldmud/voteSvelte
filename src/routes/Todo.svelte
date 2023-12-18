<script lang="ts">
  import Icon from "@iconify/svelte"
  import { tasks } from "./todo/store";
  import type { Itodo } from "./todo/store";
  let todo: Itodo[] | any;
  let editing: string;
  let identifier: number | null;
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
    tasks.update(prev => prev.filter((_item, idx) => 
        id !== idx
      ))
      console.log(id)
  }

  function enableEdit(id: number) {
    tasks.update(prev => prev.map((item, idx) => {
      if(idx === id) {
        item.edit = true;
        editing = item.task
        identifier = id
      }
      return item
    }))
  }

  function handleEdit(id: number) {
    tasks.update(prev => prev.map((item, idx)=> {
      if(idx === id && item.edit) {
        item.task = editing
        item.edit = false
        item.completed = false
      }
      return item
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
          <div class="relative h-fit">
            <h2 class={`${tasks.completed ? 'line-through' : ''}`}>{tasks.task}</h2>
            {#if tasks.edit}
              <input  type="text" class="absolute top-0 border border-gray-200 outline-0 pl-2" bind:value={editing}>
            {/if}
          </div>
        </div>
        {#if tasks.completed}
          <div class="flex gap-1 my-auto">
            {#if tasks.edit && identifier === i}
              <button on:click={()=> handleEdit(i)}>
                <Icon icon="mingcute:check-fill" />
              </button>
            {:else}
              <button on:click={()=> enableEdit(i)}>
                <Icon icon="dashicons:edit"/>
              </button>
            {/if}
            <button on:click={()=> handleDelete(i)}>
              <Icon icon="tabler:trash-x"/>
            </button>
          </div>
        {/if}
      </div>
      {/each}
    </section>
  {/if}
