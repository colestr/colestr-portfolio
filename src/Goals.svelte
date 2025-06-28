<script>
    // Define your career path stages
    const careerPath = [
      { title: 'Help Desk I', year: 'Year 1' },
      { title: 'Help Desk II', year: 'Year 2' },
      { title: 'Help Desk III', year: 'Year 3+' },
      { title: 'Administrator', year: 'Future' },
      { title: 'Networking Admin', year: 'Future' },
      { title: 'Cybersecurity Analyst', year: 'Long Term' },
    ];
  </script>
  
  <div class="container mx-auto py-12 px-4">
    <h2 class="text-4xl font-bold text-gray-900 mb-10 text-center">My Career Path Vision</h2>
  
    <div class="relative flex justify-between items-center w-full my-8">
      <div class="absolute inset-x-0 h-1 bg-blue-400 top-1/2 -translate-y-1/2 z-0"></div>
  
      {#each careerPath as stage, index (stage.title)}
        <div class="flex flex-col items-center flex-1 z-10">
          <div class="mt-4 p-3 {(index === 1 ? 'bg-white' : 'bg-slate-200')} rounded-lg shadow-lg text-center
                      min-w-32 max-w-xs transform hover:scale-105 transition-transform duration-200">
            <h3 class="font-semibold text-lg text-gray-800">{stage.title}</h3>
            <p class="text-sm text-gray-500 mt-1">{stage.year}</p>
          </div>
        </div>
      {/each}
    </div>
  
    <p class="text-center text-gray-600 mt-12 text-lg max-w-3xl mx-auto">
      This timeline represents a potential career progression, showcasing my aspiration to grow
      and specialize within the IT field, starting with a strong foundation in Help Desk support.
    </p>
  </div>
  
  <style>
    /* No specific <style> tags needed here if you're solely relying on Tailwind.
       If you wanted to add very specific, non-Tailwind styles that are only for THIS
       component, you'd put them here. For instance, if you wanted a custom font
       just for this timeline, or a complex animation.
    */
  </style>