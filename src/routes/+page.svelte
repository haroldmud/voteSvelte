<script>
  export let name = 0;
  function handleInc() {
    return name++;
  }
  function handleDec() {
    return name--;
  }
</script>

<section>
  <div class="flex justify-center gap-4">
    <button
      on:click={handleDec}
      class="h-fit my-auto px-2 rounded-sm border-2 border-black border-1 bg-blue-300"
      >dec</button
    >
    <h1 class="text-3xl font-bold underline">
      {name < 10 && name >= 0 ? "0" : ""}{name}
    </h1>
    <button
      on:click={handleInc}
      class="h-fit my-auto px-2 rounded-sm border-2 border-black border-1 bg-blue-300"
      >inc</button
    >
  </div>
</section>

<!-- <style lang="postcss">
  :global(html) {
    background-color: theme(colors.gray.100);
  }
</style> -->
