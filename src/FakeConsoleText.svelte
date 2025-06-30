<script lang='ts'>
    import { onMount, onDestroy } from 'svelte';
    // import { effect } from 'svelte/'; // Import 'effect' from svelte/runes for Svelte 5
  
    const commands: { [key: string]: string } = {
        'dir':
        `Volume in drive C has no label.
        Volume Serial Number is 0162-53E0
        
        Directory of C:\\Users\\coles
        
        04/13/2025  06:42 PM     <DIR>          .
        04/13/2025  06:42 PM     <DIR>          ..
        09/29/2021  10:52 AM     <DIR>          .android
        07/10/2024  08:26 PM     <DIR>          .cache`,
  
        'help':
        `Available commands:
            - dir: List directory contents
            - help: Show this help message
            - clear: Clear the console history
            - echo <text>: Repeat your text`,
    
        'whoami': 
        `User: coles`,

        'sbox': 
        `https://sbox.game/
        5326626f7820697320736f20636f6f6c2e`,

        'echo hello world':
        'hello world',

        'tasklist':
        `Image Name                     PID Session Name        Session#    Mem Usage
        ========================= ======== ================ =========== ============
        System Idle Process              0 Services                     0          8 K
        System                           4 Services                     0        148 K
        Registry                       148 Services                     0    127,988 K
        smss.exe                       552 Services                     0      1,220 K
        csrss.exe                      700 Services                     0      6,140 K
        wininit.exe                    788 Services                     0      7,344 K
        csrss.exe                      796 Console                      1      6,956 K
        services.exe                   860 Services                     0     11,480 K
        lsass.exe                      868 Services                     0     26,536 K
        svchost.exe                   1004 Services                     0     42,940 K
        fontdrvhost.exe                468 Services                     0      5,216 K
        winlogon.exe                   940 Console                      1     12,788 K
        fontdrvhost.exe                800 Console                      1     43,072 K`,

        'mkdir colestr-portfolio':
        '\n',

        'mkdir sbox-project-number-57':
        '\n',

        'systeminfo':
        `OS Name:                   Microsoft Windows 10 Home
        OS Version:                10.0.19045 N/A Build 19045
        OS Manufacturer:           Microsoft Corporation
        OS Configuration:          Standalone Workstation
        OS Build Type:             Multiprocessor Free
        Registered Owner:          notmyrealemail@email.com
        Registered Organization:   N/A
        Product ID:                00VA6-12071-192F4-AF399-23A5F
        Original Install Date:     6/24/2021, 8:58:49 PM
        System Boot Time:          6/26/2025, 6:29:56 PM
        System Manufacturer:       Micro-Star International Co., Ltd
        System Model:              MS-7C02
        System Type:               x64-based PC
        Processor(s):              1 Processor(s) Installed.
                                    [01]: AMD64 Family 23 Model 113 Stepping 0 AuthenticAMD ~3600 Mhz
        BIOS Version:              American Megatrends Inc. 3.50, 11/7/2019
        Windows Directory:         C:\WINDOWS
        System Directory:          C:\WINDOWS\system32
        Boot Device:               \Device\HarddiskVolume1
        System Locale:             en-us;English (United States)
        Input Locale:              en-us;English (United States)
        Time Zone:                 (UTC-08:00) Pacific Time (US & Canada)
        Total Physical Memory:     32,717 MB
        Available Physical Memory: 14,792 MB
        Virtual Memory: Max Size:  37,581 MB
        Virtual Memory: Available: 13,575 MB
        Virtual Memory: In Use:    24,006 MB
        Page File Location(s):     C:\pagefile.sys
        Domain:                    WORKGROUP`,

        'ipconfig':
        `Windows IP Configuration

        Ethernet adapter Ethernet:

        Connection-specific DNS Suffix  . :
        Link-local IPv6 Address . . . . . : fe80::f447:22cb:9ef9:19ba%11
        IPv4 Address. . . . . . . . . . . : 192.168.1.4
        Subnet Mask . . . . . . . . . . . : 255.255.255.0
        Default Gateway . . . . . . . . . : 192.168.1.1

        Ethernet adapter Ethernet 2:

        Connection-specific DNS Suffix  . :
        Link-local IPv6 Address . . . . . : fe80::2447:18fc:971a:19ba%7
        IPv4 Address. . . . . . . . . . . : 192.168.19.1
        Subnet Mask . . . . . . . . . . . : 255.255.255.0
        Default Gateway . . . . . . . . . :`,
    };
  
    let history: string[] = $state([]); // Stores completed lines (commands and outputs)
    let currentPrompt: string = 'C:\\Users\\coles>'; // The fixed prompt
    let currentTypedCommand: string = $state(''); // The part of the command being typed
    let loopTimeout: ReturnType<typeof setTimeout> | null = null; // To manage the main loop
    const typingCharDelay: number = 100; // 0.1 seconds per character
  
    // Reference to the scrollable console div
    let consoleDiv: HTMLDivElement;
  
    // Function to pick a random command key from the defined commands
    function getRandomCommandKey(): string {
        const keys = Object.keys(commands);
        if(history.length > 5)
        {
            history = [];
            return 'clear';
        }
        return keys[Math.floor(Math.random() * keys.length)];
    }
  
    // Simulates typing out a single character with a delay
    async function typeCharacter(char: string): Promise<void> {
      currentTypedCommand += char;
      await new Promise(resolve => setTimeout(resolve, typingCharDelay));
    }
  
    // Simulates typing out the entire command
    async function typeCommand(commandKey: string): Promise<void> {
      currentTypedCommand = ''; // Reset the typed command buffer
      const fullCommand = commandKey;
  
      for (const char of fullCommand) {
        await typeCharacter(char);
      }
      // Once typing is complete, add the full command line to history
      history.push(`${currentPrompt}${currentTypedCommand}`);
      currentTypedCommand = ''; // Clear typed buffer for next action
    }
  
    // Adds the command's output to the history
    function displayOutput(commandKey: string): void {
      if (commandKey === 'clear') {
        history = []; // Clear the screen by emptying history
      } else {
        const output = commands[commandKey];
        // Split output by newlines and add each line to history
        output.split('\n').forEach(line => history.push(line));
      }
    }
  
    // The main automated console loop
    async function autoConsoleLoop(): Promise<void> {
      const minDelay = 2000; // 2 seconds
      const maxDelay = 5000; // 5 seconds
      const delay = Math.floor(Math.random() * (maxDelay - minDelay + 1)) + minDelay;
  
      loopTimeout = setTimeout(async () => {
        const commandToExecute = getRandomCommandKey();
  
        // If 'clear' is chosen, clear the history first, then proceed to type
        if (commandToExecute === 'clear') {
          history = []; // Clear screen immediately
          // Add a small pause after clearing for visual effect before typing prompt
          await new Promise(resolve => setTimeout(resolve, typingCharDelay * 5));
        }
  
        await typeCommand(commandToExecute); // Type out the command
        displayOutput(commandToExecute); // Display the command's output
  
        autoConsoleLoop(); // Schedule the next command
      }, delay);
    }
  
    // CORRECTED: Use $effect rune for auto-scrolling in Svelte 5 Runes mode
    $effect(() => {
      // The effect will re-run when `history` or `currentTypedCommand` changes
      // (because they are accessed inside the effect's callback).
      // Accessing them here makes them dependencies.
      const _ = history; // Access history to make it a dependency
      const __ = currentTypedCommand; // Access currentTypedCommand to make it a dependency
  
      if (consoleDiv) {
        requestAnimationFrame(() => {
          consoleDiv.scrollTop = consoleDiv.scrollHeight;
        });
      }
    });
  
  
    onMount(() => {
      autoConsoleLoop();
  
      // Cleanup function when the component is unmounted
      return () => {
        if (loopTimeout) clearTimeout(loopTimeout);
      };
    });
  </script>
  
  <div
    bind:this={consoleDiv}
    class="bg-black text-lime-400 p-4 font-mono h-full overflow-y-auto rounded-lg shadow-inner"
  >
    {#each history as line}
      <p class="whitespace-pre-wrap">{line}</p>
    {/each}
  
    <p class="flex items-center text-lime-400">
        <span class="mr-1">{currentPrompt}</span>
        <span>{currentTypedCommand}</span>
        <span class="blinking-caret">▮</span>
    </p>
  </div>
  
  <style>
    /* Keyframes for the blinking animation */
    @keyframes blink-animation {
      0%, 100% { opacity: 1; }
      50% { opacity: 0; }
    }
  
    /* Apply the animation to the blinking-caret class */
    .blinking-caret {
      animation: blink-animation 1s infinite steps(1, start);
    }
  
    /* Ensure text in the console uses a monospace font */
    .font-mono {
      font-family: 'Courier New', Courier, monospace;
    }
  
    /* Basic scrollbar styling for a console feel */
    div::-webkit-scrollbar {
      width: 8px;
    }
    div::-webkit-scrollbar-track {
      background: #111;
    }
    div::-webkit-scrollbar-thumb {
      background: #333;
      border-radius: 4px;
    }
    div::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
  </style>