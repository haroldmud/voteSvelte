<script lang="ts">
  import { flip } from "svelte/animate";
  import Header from "./vote/Header.svelte";
  import { Votes } from "./vote/voteStore";
  import type { IVote } from "./vote/voteStore";
  let votes: IVote[];
  Votes.subscribe(prev => votes = prev)
  function shuffle() {
    votes = votes.sort(()=> .5 - Math.random())
  }
  function sum(un: number, deux: number): number {
    return un + deux
  }

  function tot(un: number, deux: number): number {
    const sum = un + deux
    return un * 100/sum
  }
</script>

<section>
  <Header create={null}/>
  <section class="mt-12 grid grid-flow-row grid-cols-2 gap-4">
    {#each votes as choice (choice)}
    <div animate:flip class="border shadow rounded-sm w-full p-6 ">
      <h2 class="font-bold text-xl">{choice.choiceOne} or {choice.choiceTwo}</h2>
      <h3 class="font-thin text-gray-400 text-sm mt-2">Total votes: {sum(choice.leftVotes, choice.rightVotes)}</h3>
      <div class="mt-6 grid gap-6">
        <div class="relative border-l-4 border-red-500 p-2 bg-[#fad8d858]">
          <div style="width: {tot(choice.leftVotes, choice.rightVotes)}%" class="percent h-full bg-[#e9525285] absolute top-0 left-0"></div>
          <h2 class="font-bold text-blue-900">{choice.choiceOne} <span class="text-gray-500 text-sm">({choice.leftVotes} votes)</span></h2>
        </div>
        <div class="relative border-l-4 border-teal-500 p-2 bg-[#baf0d927]">
          <div style="width: {tot(choice.rightVotes, choice.leftVotes)}%" class="percent h-full bg-[#52e98c85] absolute top-0 left-0"></div>
          <h2 class="font-bold text-blue-900">{choice.choiceTwo} <span class="text-gray-500 text-sm">({choice.rightVotes} votes)</span></h2>
        </div>
      </div>
      <div class="flex mt-6">
        <button on:click={shuffle} class="bg-red-800 rounded-sm w-fit px-3 text-white font-bold py-1 mx-auto">Delete</button>
      </div>
    </div>
    {/each}
  </section>
</section>

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.gray.100);
  }
</style>
