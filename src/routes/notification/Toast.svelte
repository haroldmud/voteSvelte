<script lang="ts">
  import { fade } from "svelte/transition";
  import { notification } from "./Notification";
</script>

{#if $notification}
  <div class="absolute w-full z-10 top-16 left-0">
    {#each $notification as notification }
      <div
        role="alert"
        class="mx-auto w-fit"
        transition:fade
      >
        {notification}
      </div>
    {/each}
  </div>
{/if}
