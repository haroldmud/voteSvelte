<script>
  import Header from "./Header.svelte";
  import "./styles.css";
  import "../app.css";
</script>

<div class="flex flex-col justify-between border h-[100vh] min-w-[100vh]">
  <Header />

  <main class="flex flex-1 flex-col p-[1rem] w-full max-w-[64rem] mx-auto borde-box">
    <slot />
  </main>

  <footer class="flex flex-col justify-center items-center p-[3rem] font-thin w-fit mx-auto border-black border-t">
    <p class="px-[3rem]">
      copyright 2023
    </p>
  </footer>
</div>

<style>
  @media (min-width: 480px) {
    footer {
      padding: 12px 0;
    }
  }
</style>
