<script lang="ts">
    // import { createEventDispatcher } from 'svelte';
  
    // --- Props ---
    /** The text content of the button. Can be overridden by slot content. */
    export let text: string = '';
  
    /** Function to execute when the button is clicked. */
    export let onClick: (() => void) | undefined = undefined;
  
    /** Visual style variant of the button. */
    export let variant: 'primary' | 'secondary' | 'outline' | 'ghost' = 'primary';
  
    /** If provided, renders an <a> tag instead of a <button>. */
    export let href: string | undefined = undefined;
  
    /** Target attribute for <a> tags (e.g., '_blank' for new tab). */
    export let target: '_blank' | '_self' | '_parent' | '_top' | undefined = undefined;
  
    /** Rel attribute for <a> tags (e.g., 'noopener noreferrer'). */
    export let rel: string | undefined = undefined;
  
    /** If true, the button will be disabled. */
    export let disabled: boolean = false;
  
    /** Additional Tailwind CSS classes to apply to the button. */
    export let className: string = '';
  
    // Allows parent components to listen to a generic 'click' event
    // const dispatch = createEventDispatcher();
  
    function handleClick(event: MouseEvent) {
      if (disabled) {
        // Prevent default behavior if disabled (especially for links)
        event.preventDefault();
        return;
      }
      if (onClick) {
        onClick(); // Execute the prop function if provided
      }
       // dispatch('click', event); // Dispatch the Svelte event
    }
  
    // --- Reactive Classes ---
    // Base styles applied to all button types
    $: baseClasses = `
      inline-flex items-center justify-center
      font-semibold text-lg py-3 px-6 rounded-full
      transition-all duration-300 ease-in-out transform
      focus:outline-none focus:ring-4
      active:scale-95
      ${className}
      ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
    `;
  
    // Variant-specific styles
    $: variantClasses = {
      primary: `
        bg-blue-600 text-white shadow-lg
        hover:bg-blue-700 hover:shadow-xl hover:scale-[1.02]
        focus:ring-blue-500 focus:ring-opacity-50
      `,
      secondary: `
        bg-purple-600 text-white shadow-md
        hover:bg-purple-700 hover:shadow-lg hover:scale-[1.02]
        focus:ring-purple-500 focus:ring-opacity-50
      `,
      outline: `
        bg-transparent border-2 border-blue-600 text-blue-600
        hover:bg-blue-50 hover:border-blue-700 hover:text-blue-700 hover:shadow-md hover:scale-[1.02]
        focus:ring-blue-500 focus:ring-opacity-50
      `,
      ghost: `
        bg-transparent text-gray-700 hover:text-blue-600
        hover:bg-gray-100 hover:shadow-sm hover:scale-[1.02]
        focus:ring-gray-300 focus:ring-opacity-50
      `,
    }[variant];
  </script>
  
  {#if href}
    <a
      {href}
      {target}
      {rel}
      class="{baseClasses} {variantClasses}"
      class:disabled-link={disabled}
      aria-disabled={disabled}
      on:click={handleClick}
    >
      <slot>{text}</slot>
    </a>
  {:else}
    <button
      on:click={handleClick}
      {disabled}
      class="{baseClasses} {variantClasses}"
    >
      <slot>{text}</slot>
    </button>
  {/if}
  
  <style>
    /* Custom style to prevent link clicks when disabled, since `disabled` attribute doesn't apply to <a> */
    .disabled-link {
      pointer-events: none; /* Prevents mouse events */
      /* Add any other visual styles for disabled links here if not covered by Tailwind opacity */
    }
  </style>