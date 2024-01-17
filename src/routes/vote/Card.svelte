<script lang="ts">
  import { flip } from "svelte/animate";
  import { Votes } from "./voteStore";
  // import type { IVote } from "./voteStore";
  import Icon from "@iconify/svelte";
  import { onMount } from "svelte";
  import { supabase } from "$lib/db";
  import { thatUser } from "./voteStore";
  
  let votes: any;
  
  onMount(async()=>{  
    const { data }= await supabase.from('votes').select('*');
    votes = data
      console.table(votes)
      return data ?? []
  });

  const updateVoteChoiceOne = async (choice: any) => {
    try{
      const { data, error } = await supabase
    .from('votes')
    .update({ votesOne: choice.votesOne++ })
    .eq('id', choice.id)
    .select()
    }catch(err){
      console.log(err)
    }
  }

  const updateVoteChoiceTwo = async (choice: any) => {
    try{
      const { data, error } = await supabase
    .from('votes')
    .update({ votesOne: choice.votesTwo++ })
    .eq('id', choice.id)
    .select()
    }catch(err){
      console.error(err)
    }
  }

  const deleteVote = async (choice: any) => {
    try{
      const { error } = await supabase
      .from('votes')
      .delete()
      .eq('id', choice.id)
    }catch(err) {
      console.error(err)
    }
  }

  const deleteVoteCard = (id:any) => {
    votes = votes.filter((item: any) => id !== item.id)
  }
  
  Votes.subscribe(prev => votes = prev)
  function shuffle() {
    votes = votes?.sort(()=> .5 - Math.random())
  }
  function sum(un: number, deux: number): number {
    return un + deux
  }

  function tot(un: number, deux: number): number {
    const sum = un + deux
    return un * 100/sum
  }

  function handlePopup(idx: number) {
    votes = votes.map((item: any, id: any)=> {
      if(idx === id) {
        item.readyToVote = true
      }
      return item
    })
  }

  function handlePopoff(idx: number) {
    votes = votes.map((item: any, id: any)=> {
      if(idx === id) {
        item.readyToVote = false
      }
      return item
    })
  }
</script>
{#if $thatUser.email}
  <h1>Welcome to our app {$thatUser}</h1>
{/if}
<section class="mt-12 grid grid-flow-row grid-cols-2 gap-4">
  {#each votes as choice (choice)}
    <div animate:flip class="border shadow rounded-sm w-full p-6 ">
      <h2 class="font-bold text-xl">{choice.choiceOne} or {choice.choiceTwo}</h2>
      <h3 class=" text-blue-400 p-1 font-bold text-sm mt-2">Total votes: {sum(choice.votesOne, choice.votesTwo)}</h3>
      <div class="mt-6 grid gap-6">
        <div class="relative border-l-4 border-red-500 p-2 bg-[#fad8d858]">
          <div style="width: {tot(choice.votesOne, choice.votesTwo)}%" class="percent h-full bg-[#e9525285] absolute top-0 left-0"></div>
          <h2 class="font-bold text-blue-900">{choice.choiceOne} <span class="text-gray-500 text-sm">({choice.votesOne} votes)</span></h2>
        </div>
        <div class="relative border-l-4 border-teal-500 p-2 bg-[#baf0d927]">
          <div style="width: {tot(choice.votesTwo, choice.votesOne)}%" class="percent h-full bg-[#52e98c85] absolute top-0 left-0"></div>
          <h2 class="font-bold text-blue-900">{choice.choiceTwo} <span class="text-gray-500 text-sm">({choice.votesTwo} votes)</span></h2>
        </div>
      </div>
      <div class="flex mt-6">
        <button on:click={()=> { shuffle(); handlePopup(votes.indexOf(choice)) }} class="bg-red-800 rounded-sm w-fit px-3 text-white font-bold py-1 mx-auto">VOTE NOW</button>
      </div>
      {#if choice.readyToVote}   
        <div class="bg-[#000000ab] grid gap-4 z-50 m-auto  h-full w-full top-0 left-0 fixed">
          <div class=" pb-4 bg-blue-300 rounded-lg w-[40%] h-fit m-auto shadow-slate-600 shadow-lg">
            <div class="flex justify-end pr-1 pt-1">
              <button on:click={()=> {handlePopoff(votes.indexOf(choice))}}>
                <Icon icon="basil:cancel-outline" class="hover:text-red-900" />
              </button>
            </div>
            <p class="px-4 font-bold text-center">click on your choice</p>
            <div class="px-4 flex justify-center gap-4 mt-4">
              <button on:click={()=> updateVoteChoiceOne(choice)} class="bg-red-800 hover:bg-red-900 text-white hover:text-blue-200 rounded px-2 py-1 text-xs font-bold">{choice.choiceOne}</button>
              <button on:click={()=> updateVoteChoiceTwo(choice)} class="bg-teal-400 hover:bg-teal-500 text-white hover:text-blue-200 rounded px-2 py-1 text-xs font-bold">{choice.choiceTwo}</button>
            </div>
            <div class="w-full flex justify-center mt-4">
              <button on:click={()=> {deleteVote(choice);deleteVoteCard(choice.id)}} class="bg-red-400 text-gray-100 font-bold px-2 rounded-lg">delete card</button>
            </div>
          </div>
        </div>
      {/if}
    </div>
    {/each}
</section>
