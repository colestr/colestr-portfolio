<script>

</script>

<div class="bg-zinc-800 flex flex-wrap rounded-lg border-b-4 border-zinc-905 shadow-2xl">
    <div class="bg-zinc-700 w-12 text-zinc-400 text-lg flex items-center justify-center rounded-tl-lg rounded-bl-lg">1</div>
    <div class="bg-zinc-500 w-1"></div>
    <h1 class="text-2xl font-bold font-[Courier] text-white pl-2">Cole</h1>
    <h1 class="text-2xl font-bold font-[Courier] text-lime-600">str</h1>
    <h1 class="text-2xl font-bold font-[Courier] text-lime-600 blinking-caret pr-4">_</h1>
</div>

<style>
    @keyframes blink-animation {
        0%, 100% { opacity: 1; }
        50% { opacity: 0; }
    }

    .blinking-caret {
        animation: blink-animation 1s infinite steps(1, start);
    }
</style>
