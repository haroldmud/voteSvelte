<script lang="ts">
  import { supabase } from "$lib/db";
  import { thatUser } from "../../vote/voteStore";
  let email = ""
  let password = ""
  const signUp = async(event: { preventDefault: () => void; })=> {
    event?.preventDefault();
    let { data: userData, error } = await supabase.auth.signUp({
      email: email,
      password: password
    })

    console.log(userData)
    $thatUser = userData
  }
</script>

<section>
  <div class="bg-white p-8 rounded shadow-md w-96 mx-auto mt-12">

    <h2 class="text-2xl font-semibold mb-4">Register</h2>

    <form action="/login/signup" method="POST">

        <div class="mb-4">
            <label for="username" class="block text-sm font-medium text-gray-600">email or username</label>
            <input bind:value={email} type="text" id="username" name="username" placeholder="email@gmail.com" class="mt-1 p-2 w-full border rounded-md">
        </div>

        <div class="mb-4">
            <label for="password" class="block text-sm font-medium text-gray-600">Password</label>
            <input bind:value={password} type="password" placeholder="**** *****" id="password" name="password" class="mt-1 p-2 w-full border rounded-md">
        </div>

        <button on:click={signUp} type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Register</button>
        <div class="mt-4">
          <p>Already a member? <span><a class="text-green-400 hover:underline" href="/login">login now</a></span></p>
        </div>
    </form>
  </div>
</section>
