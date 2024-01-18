<script lang="ts">
  import { supabase } from "$lib/db";
  import { thatUser } from "../vote/voteStore";
  let loading = false;
  let email = ""
  let password = ""
  const logIn = async ()=> {
    try{
      loading = true;
      let { data: userData, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password
      })
      if(error) throw error;
      alert('check your email for the login link')
    }catch(err){
      console.error(err)
    }finally{
      loading = false
    }
    // $thatUser = userData
  }
</script>

<section>
  <div class="bg-white p-8 rounded shadow-md w-96 mx-auto mt-12">

    <h2 class="text-2xl font-semibold mb-4">Login</h2>

    <form action="#" method="POST">

        <div class="mb-4">
            <label for="username" class="block text-sm font-medium text-gray-600">email or username</label>
            <input bind:value={email} type="text" id="username" name="username" placeholder="email@gmail.com" class="mt-1 p-2 w-full border rounded-md">
        </div>

        <div class="mb-4">
            <label for="password" class="block text-sm font-medium text-gray-600">Password</label>
            <input bind:value={password} type="password" placeholder="**** *****" id="password" name="password" class="mt-1 p-2 w-full border rounded-md">
        </div>

        <button on:click={logIn} type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Login</button>
        <div class="mt-4">
          <p>Not a member yet? <span><a class="text-green-400 hover:underline" href="/login/signup">Signup now</a></span></p>
        </div>
    </form>
</div>
</section>
