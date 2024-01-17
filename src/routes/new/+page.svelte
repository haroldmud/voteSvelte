<svelte:head>
	<title>Votesd</title>
	<meta name="description" content="About this app" />
</svelte:head>

<script lang="ts">
	import { supabase } from "$lib/db";
  import { goto } from "$app/navigation";
	import Header from "../vote/Header.svelte";
	let firstValue='';
	let secondValue='';
	

	const createNewVoteCard = async (val1: string, val2:string) => {
		const { data, error } = await supabase
			.from('votes')
			.insert([
				{ choiceOne: val1 , choiceTwo: val2 },
			])
			.select()
			firstValue='';
			secondValue='';
			goto('/');
	}

</script>

<section>
	<Header create="/new"/>
	<div class="bg-blue-200 h-[50vh] mt-12">
		<h1 class="text-3xl pt-12 font-bold">Create your own voting card</h1>
		<form class="flex flex-col gap-4 mt-6">
			<div class="flex gap-4 w-fit mx-auto">
				<h2 class="w-32 text-blue-950 font-bold text-sm">First choice<span class="text-red-500 text-xl">*</span></h2>
				<input bind:value={firstValue} class="border border-blue-950 rounded-lg py-1 bg-transparent w-7/12 mx-auto placeholder:text-blue-400 placeholder:italic placeholder:text-sm px-2 outline-red-400" type="text"  placeholder="write in here">
			</div>
			<div class="flex gap-4 w-fit mx-auto">
				<h2 class="w-32 text-blue-950 font-bold text-sm">Second choice <span class="text-red-500 text-xl">*</span></h2>
				<input bind:value={secondValue}  class="border border-blue-950 rounded-lg py-1 bg-transparent w-7/12 mx-auto placeholder:text-blue-400 placeholder:italic placeholder:text-sm px-2 outline-green-400" type="text"  placeholder="type it here">
			</div>
			<button on:click={()=> createNewVoteCard(firstValue, secondValue)} class="bg-blue-900 w-fit px-4 py-2 mx-auto mt-12 text-2xl text-white font-bold rounded-lg hover:bg-blue-800">Generate</button>
		</form>
	</div>
</section>

