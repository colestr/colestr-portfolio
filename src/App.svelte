<!-- src/App.svelte -->
<script lang="ts">
  import FancyButton from './FancyButton.svelte';
  import HeroScreen from './HeroScreen.svelte';
  import FakeConsoleText from './FakeConsoleText.svelte';
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
  <section class="flex-col h-[85vh]">
    <div class="relative h-[85vh] bg-black 
    border-t-gray-900 border-t-64
    border-b-gray-600 border-b-96 
    border-l-slate-800 border-l-128
    border-r-slate-800 border-r-128 
    shadow-2xl blur-[2px]">
  
    <FakeConsoleText />
    
  </div>
    <div class="absolute left-16 right-16 top-24 bottom-40">
      <div class="grid grid-cols-2 h-full p-4 gap-8">
        <div class="flex flex-col justify-center gap-8 h-full">
          <div class="h-1/8 rounded-lg shadow-2xl bg-gradient-to-br from-lime-800/40 to-lime-600/40 backdrop-blur-md border-b-4 border-b-lime-700 border-r-4 border-r-lime-600 px-4 py-4
            flex items-center justify-center"> <h1 class="text-8xl font-extrabold text-gray-100 text-center">I'm Cole :)</h1>
          </div>
          <div class="h-1/4 rounded-lg shadow-2xl bg-white/10 backdrop-blur-md border-b-4 border-b-gray-500 border-r-2 border-r-gray-600 px-4 py-4">
            <h1 class="text-4xl font-bold text-amber-300">Here to learn!</h1>
            <p class="text-slate-300 text-2xl">I enjoy learning about and being engaged in new and exciting challenges, computer science, IT, business, and law, making cybersecurity a clear career path for me. I'm here to learn!</p>
          </div>
        </div>
        <!-- Gemini, I need this div in the center of the height -->
        <div class="h-1/2 rounded-lg shadow-2xl bg-white/10 backdrop-blur-md border-b-4 border-b-gray-500 border-r-2 border-r-gray-600 px-4 py-4 self-center">
          <h1 class="text-xl font-bold text-amber-300">This is some text.</h1>
          <p class="text-slate-300">This card contains some really cool information you should definitely be interested in reading</p>
        </div>
      </div>
    </div>
    <div class="absolute left-0 right-0 top-0 bottom-100">

    </div>
  </section>

  <section class="flex-col h-[85vh] bg-gray-400">
    <!-- <div class="w-3xs h-36 bg-slate-900 rounded-2xl shadow-2xl border-b-4 border-slate-950 px-4 py-4">
      <h1 class="text-xl font-bold text-amber-300">This is some text.</h1>
      <p class="text-slate-300">This card contains some really cool information you should definitely be interested in reading</p>
    </div> -->

    <!-- <div class="w-3xs h-36 bg-slate-900 rounded-2xl shadow-2xl border-b-4 border-slate-950 px-4 py-4">
    </div> -->
  </section>
</div>

<style>
  :global(body) {
    overflow: visible;
  }
</style>

