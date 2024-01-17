<script lang="ts">
  import Header from "./vote/Header.svelte";
  import Card from "./vote/Card.svelte";
</script>

<section>
  <Header create={null}/>
  <Card />
</section>

<style lang="postcss">
  :global(html) {
    /* background-color: theme(colors.gray.100); */
  }
</style>
