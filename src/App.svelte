<!-- src/App.svelte -->
<script lang="ts">
  import FancyButton from './FancyButton.svelte';
  import Logo from './Logo.svelte';
  import dogImage from './assets/dog.jpg';
</script>

<header class="bg-slate-900 shadow-sm py-4 px-6 sticky top-0 z-50">
  <div class="container mx-auto flex justify-between items-center">
    <a href="/" class="">
      <span>
        <Logo />
      </span>
    </a>

    <nav>
      <ul class="flex space-x-12 justify-items-center">
        <li><a href="#about" class="text-slate-300 hover:text-amber-300 text-xl font-bold transition-colors">About</a></li>
        <li><a href="#skills" class="text-slate-300 hover:text-amber-300 text-xl font-bold transition-colors">Skills</a></li>
        <li><a href="#projects" class="text-slate-300 hover:text-amber-300 text-xl font-bold transition-colors">Projects</a></li>
        <li><a href="#career" class="text-slate-300 hover:text-amber-300 text-xl font-bold transition-colors">Career</a></li>
      </ul>
    </nav>
  </div>
</header>

<div class="container mx-auto"> 
  <section class="flex-col h-[85vh] bg-orange-800">
    
  </section>

  <section class="flex-col h-[85vh] bg-orange-700">
    <div class="w-3xs h-36 bg-slate-900 rounded-2xl shadow-2xl border-b-4 border-slate-950 px-4 py-4">
      <h1 class="text-xl font-bold text-amber-300">This is some text.</h1>
      <p class="text-slate-300">This card contains some really cool information you should definitely be interested in reading</p>
    </div>

    <div class="w-3xs h-36 bg-slate-900 rounded-2xl shadow-2xl border-b-4 border-slate-950 px-4 py-4">
    </div>
  </section>
</div>

<style>
  :global(body) {
    overflow: visible;
  }
</style>

