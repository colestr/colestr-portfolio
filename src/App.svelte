<!-- src/App.svelte -->
<script lang="ts">
  import dogImage from './assets/dog.jpg';
</script>

<div class="container mx-auto px-4"> 
  <section class="h-screen">
    <h1 class="font-extrabold justify-self-center text-7xl py-5">⚠ STINKY DOG ⚠</h1>
    <img src={dogImage} alt="stinky dog" class="size-150 justify-self-center border-amber-300 border-8"/>
    <h1 class="font-extrabold justify-self-center text-7xl py-5">⚠ STINKY DOG ⚠</h1>
  </section>
</div>

<style>
  :global(body) {
    overflow: visible;
  }
  /* No specific <style> needed if using only Tailwind */
</style>

