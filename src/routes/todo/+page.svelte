<script>
  // @ts-nocheck
   import Todo from "./Todo.svelte";
   import Add from "./Add.svelte";
  </script>
  
  <section>
    <Add />
    <Todo />
  </section>
  
  <style lang="postcss">
    :global(html) {
      background-color: theme(colors.gray.100);
    }
  </style>
