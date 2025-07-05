<script lang="ts">
    // --- Component Properties (Props) ---
  
    /**
     * The text displayed in the window's title bar.
     * @default "New Window"
     */
    export let windowName: string = "New Window";
  
    /**
     * Tailwind CSS class for the background color of the title bar.
     * Example: "bg-blue-700", "bg-gray-700"
     * @default "bg-gray-700" (Typical Windows 10 inactive title bar)
     */
    export let titleBarColor: string = "bg-gray-700";
  
    /**
     * Tailwind CSS class for the background color of the window's main content area.
     * Example: "bg-gray-900", "bg-white", "bg-zinc-800"
     * @default "bg-zinc-800" (A slightly darker gray for content)
     */
    export let backgroundColor: string = "bg-zinc-800";
  
    /**
     * Tailwind CSS class for the width of the window.
     * Example: "w-96", "w-full", "w-1/2"
     * @default "w-96"
     */
    export let width: string = "w-96";
  
    /**
     * Tailwind CSS class for the height of the window.
     * Example: "h-64", "h-full", "h-auto"
     * @default "h-64"
     */
    export let height: string = "h-64";
  
    /**
     * Optional additional CSS classes to apply to the main window container.
     * Example: "mt-4 ml-8", "rounded-xl"
     */
    export let windowClass: string = "";

      /**
     * Controls the scrollbar behavior for oversized content.
     * "auto": Scrollbar appears only when content overflows.
     * "hidden": Content is clipped, no scrollbar appears.
     * "scroll": Scrollbar always appears, even if content doesn't overflow.
     * @default "auto"
     */
    export let scrollbar: 'auto' | 'hidden' | 'scroll' = 'hidden';

    export let iconName: string | undefined = undefined;

    // Reactive class for scrollbar behavior
    $: scrollbarClass = {
        'auto': 'overflow-auto',
        'hidden': 'overflow-hidden',
        'scroll': 'overflow-y-scroll', // Using y-scroll for vertical scrollbar
    }[scrollbar];
  </script>
  
  <div
    class="flex flex-col shadow-xl border-[1px] border-black overflow-hidden {width} {height} {windowClass}"
  >
    <div
      class="flex items-center justify-between px-2 py-1 {titleBarColor} text-zinc-200 font-sans text-sm select-none"
      style="user-select: none; -webkit-app-region: drag;"
      aria-label="Window title bar for {windowName}"
    >
        <div class="flex items-center">
            {#if iconName}
            <span class="material-symbols-outlined text-base mr-2" aria-hidden="true">
                {iconName}
            </span>
            {/if}
            <!-- <span class="material-symbols-outlined">
                edit_calendar
            </span> -->
            <span class="font-semibold">{windowName}</span>
        </div>
  
      <div class="flex flex-shrink-0">
        <button
          class="w-11 h-6 flex items-center justify-center text-white focus:outline-none transition-colors duration-100 hover:bg-gray-600"
          title="Minimize"
          aria-label="Minimize window"
        >
          <span class="text-2xl mb-3 font-bold -mt-1">_</span>
        </button>
  
        <button
          class="w-11 h-6 flex items-center justify-center text-white focus:outline-none transition-colors duration-100 hover:bg-gray-600"
          title="Maximize"
          aria-label="Maximize or restore window"
        >
            <span class="text-2xl font-bold -mt-1">□</span>
        </button>
  
        <button
          class="w-11 h-6 flex items-center justify-center text-white focus:outline-none transition-colors duration-100 hover:bg-red-600"
          title="Close"
          aria-label="Close window"
        >
          <span class="text-md font-bold mt-1">✕</span>
        </button>
      </div>
    </div>
  
    <div class="flex-grow p-4 overflow-auto {scrollbarClass} {backgroundColor}">
      <slot></slot>
    </div>
  </div>
  
  <style>
    /* Basic styles that might not be covered by Tailwind or for finer control */
    button {
      /* Ensures buttons don't have default browser outline on click */
      outline: none;
    }
  </style>