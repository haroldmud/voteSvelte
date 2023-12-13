<script>
// @ts-nocheck

  import Header from "./vote/Header.svelte";
</script>

<section>
  <Header/>
  <section class="mt-12">
    <div class="border shadow rounded-sm w-6/12 p-6 ">
      <h2 class="font-bold text-xl">Python or JavaScript</h2>
      <h3 class="font-thin text-gray-400 text-sm mt-2">Total votes: 14</h3>
      <div class="mt-6 grid gap-6">
        <div class="border-l-4 border-red-500 p-2 bg-[#fef2f258]">
          <h2>JavaScript <span class="text-gray-500 text-sm">(5 votes)</span></h2>
        </div>
        <div class="border-l-4 border-teal-500 p-2 bg-[#f4fef258]">
          <h2>JavaScript <span class="text-gray-500 text-sm">(5 votes)</span></h2>
        </div>
      </div>
      <div class="flex mt-6">
        <button class="bg-red-800 rounded-sm w-fit px-3 text-white font-bold py-1 mx-auto">Delete</button>
      </div>
    </div>
  </section>
</section>

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.gray.100);
  }
</style>
