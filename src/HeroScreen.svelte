<script lang='ts'>
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

        'clear': '',
    };

    let history: string = "";

    // How I want this to work is as follows:
    // 1) Every 2-5 seconds, pick a random command from 'commands'
    // 2) Type out the chosen command at a rate of 1 character every 0.1 seconds. The line where we type the character should start with 'C:\Users\coles>', which should also be added to history so it can be rendered.
    // 3) Add value of chosen command key to history on a new line.

    // Additional rules:
    // If 'clear' is picked, clear the screen, set history to empty, leaving only a 'C:\Users\coles>' and blinking caret remaining

    // This is just a simulation of a Windows console; you know how it should work and look...
</script>

<p class="text-lime-400 break-all blur-[2px]">
      {history}
</p>
<p class="text-lime-400 break-all">
    <!-- Caret should blink and be placed at the end of the history text -->
    ▮
</p>

<style>

</style>