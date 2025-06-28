<script>
  import Goals from "./Goals.svelte";

  let currentYear = new Date().getFullYear();

  // Example data for projects - you'd replace this with your actual projects
  const projects = [
    {
      id: 1,
      name: 'Project Alpha',
      description: 'A web application built with Svelte, focusing on real-time data visualization.',
      image: 'https://via.placeholder.com/400x250/A78BFA/FFFFFF?text=Project+Alpha', // Placeholder image
      tech: ['Svelte', 'Tailwind CSS', 'Vite', 'Firebase'],
      link: '#', // Replace with your actual project link
      github: '#', // Replace with your actual GitHub link
    },
    {
      id: 2,
      name: 'E-commerce Backend',
      description: 'Robust RESTful API for an online store, developed using Python and Django.',
      image: 'https://via.placeholder.com/400x250/60A5FA/FFFFFF?text=Project+Beta',
      tech: ['Python', 'Django', 'PostgreSQL', 'Docker'],
      link: '#',
      github: '#',
    },
    {
      id: 3,
      name: 'Help Desk Automation',
      description: 'Automated script to streamline common IT Help Desk tasks using PowerShell.',
      image: 'https://via.placeholder.com/400x250/34D399/FFFFFF?text=Project+Gamma',
      tech: ['PowerShell', 'Windows API', 'Automation'],
      link: '#',
      github: '#',
    },
  ];

  // Dummy skills data
  const skills = [
    { name: 'HTML', icon: '💻', shit: 'shart' },
    { name: 'CSS', icon: '🎨' },
    { name: 'JavaScript', icon: '💡' },
    { name: 'Svelte', icon: '🚀' },
    { name: 'Tailwind CSS', icon: '💨' },
    { name: 'Python', icon: '🐍' },
    { name: 'C#', icon: '🚀' },
    { name: 'SQL', icon: '💾' },
    { name: 'Git', icon: '🌳' },
    { name: 'Windows Server', icon: '🖥️' },
    { name: 'Network Troubleshooting', icon: '🔌' },
    { name: 'Active Directory', icon: '🏢' },
  ];
</script>

<div class="font-sans text-gray-800 bg-gray-50 antialiased">

  <header class="bg-white shadow-sm py-4 px-6 sticky top-0 z-50 font-thin">
    <nav class="container mx-auto flex justify-between items-center">
      <a href="/" class="text-2xl font-bold text-blue-600 hover:text-blue-800 transition-colors">Coles Portfolio</a>
      <ul class="flex space-x-6">
        <li><a href="#about" class="text-gray-600 hover:text-blue-600 font-medium transition-colors">About</a></li>
        <li><a href="#skills" class="text-gray-600 hover:text-blue-600 font-medium transition-colors">Skills</a></li>
        <li><a href="#projects" class="text-gray-600 hover:text-blue-600 font-medium transition-colors">Projects</a></li>
        <li><a href="#contact" class="text-gray-600 hover:text-blue-600 font-medium transition-colors">Contact</a></li>
      </ul>
    </nav>
  </header>

  <section class="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20 px-6 text-center shadow-lg">
    <div class="container mx-auto">
      <img
        src="src/assets/easter_egg.png"
        alt="Coles Johnson"
        class="rounded-full w-32 h-32 mx-auto mb-6 border-4 border-white shadow-md"
      />
      <h1 class="text-5xl font-extrabold leading-tight mb-4 drop-shadow-md">
        I'm Cole.
      </h1>
      <p class="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
        An aspiring IT Help Desk professional with a passion for problem-solving,
        building efficient systems, and continuous learning in tech.
      </p>
      <a
        href="#projects"
        class="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-full shadow-lg
               hover:bg-blue-100 hover:scale-105 transition transform duration-300 ease-in-out
               focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50"
      >
        View My Work
      </a>
    </div>
  </section>

  <section id="timeline" class="py-16 px-6 bg-white">
    <Goals />
  </section>

  <section id="about" class="py-16 px-6 bg-white">
    <div class="container mx-auto max-w-4xl">
      <h2 class="text-4xl font-bold text-gray-900 mb-8 text-center">About Me</h2>
      <div class="prose max-w-none text-lg leading-relaxed text-gray-700">
        <p class="mb-4">
          With a strong background in customer service and a growing expertise in programming languages like C# and Python,
          I'm eager to transition into a career where I can apply my technical skills to real-world IT challenges.
          My journey into tech began with a curiosity for how systems work, evolving into a dedicated pursuit of knowledge
          in software development, network fundamentals, and user support.
        </p>
        <p class="mb-4">
          I thrive in environments where I can diagnose issues, implement solutions, and help users effectively.
          My experience extends from scripting for automation to understanding database structures and
          building small-scale web applications. I am committed to continuous learning and staying updated
          with the latest technologies to provide the best possible support and innovation.
        </p>
        <p>
          Beyond the keyboard, I enjoy [mention a hobby or interest, e.g., hiking, gaming, reading, building PCs],
          which further hones my problem-solving abilities and attention to detail. I'm excited to bring my
          proactive approach and technical aptitude to a dynamic IT Help Desk role.
        </p>
      </div>
    </div>
  </section>

  <section id="skills" class="py-16 px-6 bg-gray-100">
    <div class="container mx-auto max-w-4xl text-center">
      <h2 class="text-4xl font-bold text-gray-900 mb-10">My Skills & Technologies</h2>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {#each skills as skill (skill.name)}
          <div class="bg-slate-700 p-4 rounded-lg shadow-md flex flex-col items-center justify-center
                      hover:shadow-lg hover:scale-105 transition-transform duration-200">
            <div class="relative w-10 h-10 flex items-center justify-center mb-2">
              <span class="absolute text-4xl blur-xl text-gray-400" aria-hidden="true">{skill.icon}</span>
              <span class="relative text-4xl" role="img" aria-label="{skill.name} icon">{skill.icon}</span>
            </div>
            <p class="text-lg font-semibold text-white">{skill.name}</p>
            <p class="text-lg font-semibold text-white">{skill.shit}</p>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <section id="projects" class="py-16 px-6 bg-white">
    <div class="container mx-auto max-w-5xl">
      <h2 class="text-4xl font-bold text-gray-900 mb-10 text-center">My Projects</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each projects as project (project.id)}
          <div class="bg-white rounded-lg shadow-xl overflow-hidden
                      hover:shadow-2xl hover:scale-[1.1] transition-transform duration-500">
            <img src={project.image} alt={project.name} class="w-full h-48 object-cover" />
            <div class="p-6">
              <h3 class="text-2xl font-bold text-gray-900 mb-2">{project.name}</h3>
              <p class="text-gray-600 mb-4">{project.description}</p>
              <div class="flex flex-wrap gap-2 mb-4">
                {#each project.tech as tech (tech)}
                  <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                    {tech}
                  </span>
                {/each}
              </div>
              <div class="flex justify-between items-center">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="bg-blue-600 text-white py-2 px-4 rounded-md text-sm font-medium
                         hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                  View Live
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-gray-600 hover:text-gray-900 text-sm font-medium
                         transition-colors flex items-center space-x-1"
                >
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.867-.013-1.702-2.782.603-3.369-1.34-3.369-1.34-.454-1.15-.11-1.465-.083-1.565.317-.216.243-.165.65.045.33.29.866.247 1.134.189.043-.372.13-1.246.082-1.477-2.65-.296-5.432-1.317-5.432-5.882 0-1.303.465-2.369 1.234-3.205-.125-.303-.535-1.516.117-3.155 0 0 1.008-.321 3.301 1.222.957-.266 1.983-.399 3.003-.404 1.02.005 2.046.138 3.003.404 2.292-1.543 3.3-1.222 3.3-1.222.652 1.639.242 2.852.118 3.155.77.835 1.233 1.901 1.233 3.205 0 4.572-2.786 5.586-5.443 5.876.075.64.28 1.533.28 1.849 0 .134-.008.486-.013.585.836.732 2.873.61 3.476.474C17.387 18.067 20 14.398 20 10.017 20 4.484 15.522 0 10 0z" clip-rule="evenodd" />
                  </svg>
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <section id="contact" class="py-16 px-6 bg-gray-50">
    <div class="container mx-auto max-w-2xl">
      <h2 class="text-4xl font-bold text-gray-900 mb-8 text-center">Get in Touch</h2>
      <p class="text-center text-lg text-gray-700 mb-8">
        I'm always open to new opportunities and collaborations. Feel free to reach out!
      </p>
      <form class="bg-white p-8 rounded-lg shadow-xl space-y-6">
        <div>
          <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            class="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm
                   focus:ring-blue-500 focus:border-blue-500 text-lg"
            placeholder="Your Name"
          />
        </div>
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            class="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm
                   focus:ring-blue-500 focus:border-blue-500 text-lg"
            placeholder="your.email@example.com"
          />
        </div>
        <div>
          <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            class="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm
                   focus:ring-blue-500 focus:border-blue-500 text-lg"
            placeholder="Your message to me..."
          ></textarea>
        </div>
        <button
          type="submit"
          class="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-md shadow-lg
                 hover:bg-blue-700 hover:scale-105 transition transform duration-300 ease-in-out
                 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Send Message
        </button>
      </form>
    </div>
  </section>

  <footer class="bg-gray-800 text-white py-8 px-6 text-center">
    <div class="container mx-auto">
      <p class="mb-4">
        &copy; {currentYear} Coles Johnson. All rights reserved.
      </p>
      <div class="flex justify-center space-x-6">
        <!-- <a href="#" class="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
        <a href="#" class="text-gray-400 hover:text-white transition-colors">GitHub</a>
        <a href="#" class="text-gray-400 hover:text-white transition-colors">Email</a> -->
      </div>
    </div>
  </footer>

</div>

<style>
  /* You can add any global Svelte/CSS styles here that aren't handled by Tailwind,
     but for a portfolio, you might not need much if any.
     Example:
     */
     /* :global(body) {
       font-family: 'Poppins', sans-serif;
     } */
</style>

