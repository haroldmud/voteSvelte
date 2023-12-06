<script>
  import { toast } from "./notification/Notification";
  import { count } from "./notification/Notification";
  import { inc } from "./notification/Notification";
  import { dec } from "./notification/Notification";
  import Toast from "./notification/Toast.svelte";

  export let name = 0;
  function handleInc() {
    return name++;
  }
  function handleDec() {
    return name--;
  }
</script>

<section>
  <Toast />
  <button on:click={inc}>
    increse
  </button>
  <div>
    {count}
  </div>
  <button on:click={dec}>
    decrease
  </button>
  <div>
    <button
      class="cursor-pointer mt-[30rem]"
      on:click={()=> toast('️‍🔥 Svelete is fire for real')}
    >show notification</button>
  </div>
</section>

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.gray.100);
  }
</style>
