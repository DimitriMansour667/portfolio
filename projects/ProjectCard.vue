<script setup>
const projects = [
  {
    icon: "🖥️",
    title: "Raspberry Pi 5 Self Hosting",
    description:
      "Self hosted a majority of my projects and my start-up company using Docker and Portainer on local Raspberry Pi.",
    tags: ["Docker", "Portainer", "Raspberry Pi", "Self-Hosting"],
    category: "Infrastructure",
  },
  {
    icon: "🧗",
    title: "Crimps",
    description:
      "My start-up company that provides a platform for users to share their completed wall climbing routes.",
    link: "https://crimps.ca/",
    tags: ["Flutter", "Dart", "Pocketbase", "Mobile App"],
    category: "Startup",
  },
  {
    icon: "🖥️",
    title: "Cmdim",
    description:
      "My newest cli tool made with Go. To share files between devices easily.",
    link: "https://github.com/DimitriMansour667/cli_upload",
    tags: ["Go", "CLI", "File Sharing"],
    category: "Tools",
  },
  {
    icon: "🖥️",
    title: "The Human Terminal",
    description:
      "A web-app that allows you to interact with different parts of the human body and learn about them.",
    link: "https://www.surely-the-demo-will-work.tech/",
    tags: ["Next.js", "AI", "Gemini", "Three.js"],
    category: "Web Apps",
  },
  {
    icon: "🎮",
    title: "BloodShake",
    description:
      "3D race against time game made with Unity and C# in 48 hours.",
    link: "https://github.com/DimitriMansour667/BloodShake",
    tags: ["Unity", "C#", "Game Dev", "3D"],
    category: "Games",
  },
  {
    icon: "🎮",
    title: "Tower of Mamel",
    description:
      "2D platformer game with boss battles made with Godot and GDscripts.",
    link: "https://roboterrifiant.itch.io/tower-of-mamel",
    tags: ["Godot", "GDScript", "Game Dev", "2D"],
    category: "Games",
  },
  {
    icon: "🎮",
    title: "DodgeRP",
    description: "2D dodging game made with Unity and C#.",
    link: "https://dimitrimansour667.github.io/DodgeRP/",
    tags: ["Unity", "C#", "Game Dev", "2D"],
    category: "Games",
  },
  {
    icon: "🛠️",
    title: "DimiLIB",
    description:
      "Utility based web-app containing many features such as AI tools made with Streamlit and Python.",
    link: "https://dimilib.streamlit.app/",
    tags: ["Python", "Streamlit", "AI", "Web App"],
    category: "Web Apps",
  },
  {
    icon: "🎵",
    title: "SyncIn",
    description:
      "Extensive music encyclopedia that combines multiple API's made using Django, Python and MongoDB.",
    link: "https://github.com/DimitriMansour667/H22-GR1-SyncIn",
    tags: ["Django", "Python", "MongoDB", "API"],
    category: "Web Apps",
  },
  {
    icon: "💻",
    title: "Dimi-cli",
    description:
      "Packaged cli containing Powershell commands made easy and utility based commands made with Python.",
    link: "https://github.com/DimitriMansour667/dimi-cli",
    tags: ["Python", "CLI", "PowerShell"],
    category: "Tools",
  },
  {
    icon: "☁️",
    title: "FileShare",
    description:
      "Google Drive inspired web app that lets you save files on personal cloud made with Svelte and FastAPI.",
    link: "https://github.com/DimitriMansour667/FileShare",
    tags: ["Svelte", "FastAPI", "Cloud Storage"],
    category: "Web Apps",
  },
  {
    icon: "🎮",
    title: "PolyHoot",
    description:
      "Inspired kahoot game that can run on web, desktop and mobile thats supports CI/CD made with Gitlab Pipelines, Angular, Flutter, Express and Electron.",
    link: "https://polytechnique-montr-al.gitlab.io/log3900/25-1/equipe-205/LOG3900-205/#/login",
    tags: ["Angular", "Flutter", "Express", "Electron"],
    category: "Games",
  },
  {
    icon: "☁️",
    title: "ClipShare",
    description:
      "Share large clips of your favorite videos with your friends on discord and social media made with Htmx and FastAPI.",
    link: "https://github.com/DimitriMansour667/htmx",
    tags: ["HTMX", "FastAPI", "Video Sharing"],
    category: "Web Apps",
  },
  {
    icon: "🤖",
    title: "Neural Network library for Python",
    description:
      "Made a neural network library that can classify be used in basic games made with PyGame.",
    link: "https://github.com/DimitriMansour667/neural_network_pygames",
    tags: ["Python", "Neural Networks", "PyGame"],
    category: "AI",
  },
  {
    icon: "🤖",
    title: "Area Scanning Robot",
    description:
      "Made a robot that can scan and draw a parameter of objects made with C and Python.",
    tags: ["C", "Python", "Robotics"],
    category: "Robotics",
  },
  {
    icon: "🤖",
    title: "Discord Bots",
    description:
      "Made numerous discord bots using python to entertain large servers and provide utility.",
    tags: ["Python", "Discord API", "Bots"],
    category: "Tools",
  },
];

const categories = [...new Set(projects.map((p) => p.category))];

const handleClick = (link) => {
  if (link) {
    window.open(link, "_blank");
  }
};
</script>

<template>
  <div class="projects-container">
    <section class="intro-section">
      <h1>My Projects 🚀</h1>
      <p class="subtitle">A showcase of my work across various domains</p>
    </section>

    <section
      v-for="category in categories"
      :key="category"
      class="category-section"
    >
      <h2>{{ category }}</h2>
      <div class="projects-grid">
        <div
          v-for="project in projects.filter((p) => p.category === category)"
          :key="project.title"
          class="project-card"
          :class="{ 'has-link': project.link }"
          @click="handleClick(project.link)"
          role="button"
          tabindex="0"
        >
          <div class="card-content">
            <div class="project-header">
              <span class="project-icon">{{ project.icon }}</span>
              <h3>{{ project.title }}</h3>
            </div>
            <p class="project-description">{{ project.description }}</p>
            <div class="project-tags">
              <span v-for="tag in project.tags" :key="tag" class="project-tag">
                {{ tag }}
              </span>
            </div>
            <div v-if="project.link" class="project-link">
              Click to view project →
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.projects-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  position: relative;
  overflow: hidden;
}

.projects-container::before {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    45deg,
    #ff4757,
    #2ed573,
    #1e90ff,
    #ffa502,
    #ff4757
  );
  background-size: 400% 400%;
  animation: gradientBG 15s ease infinite;
  z-index: -1;
  opacity: 0.3;
  pointer-events: none;
}

.projects-container::after {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    -45deg,
    #ff4757,
    #2ed573,
    #1e90ff,
    #ffa502,
    #ff4757
  );
  background-size: 400% 400%;
  animation: gradientBG 15s ease infinite reverse;
  z-index: -1;
  opacity: 0.2;
  pointer-events: none;
}

@keyframes gradientBG {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

/* Ensure content is above the background */
.intro-section,
.category-section {
  position: relative;
  z-index: 1;
}

.intro-section {
  text-align: center;
  margin-bottom: 4rem;
}

.intro-section h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  color: var(--vp-c-text-1);
  letter-spacing: -0.02em;
  line-height: 1.2;
}

.subtitle {
  color: var(--vp-c-text-2);
  font-size: 1.25rem;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

.category-section {
  margin-bottom: 4rem;
}

.category-section h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
  color: var(--vp-c-text-1);
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--vp-c-divider);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

.project-card {
  position: relative;
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
  border: 1px solid transparent;
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.project-card::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 12px;
  padding: 1px;
  background: linear-gradient(45deg, var(--vp-c-brand), var(--vp-c-brand-2));
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover::before {
  opacity: 1;
}

.project-card.has-link {
  cursor: pointer;
  transition: transform 0.2s ease;
}

.project-card.has-link:hover {
  transform: translateY(-4px);
}

.project-card.has-link:hover .project-link {
  transform: translateX(4px);
}

.card-content {
  position: relative;
  z-index: 1;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.project-header {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  gap: 0.75rem;
}

.project-icon {
  font-size: 1.5rem;
}

.project-header h3 {
  margin: 0;
  color: var(--vp-c-text-1);
  font-size: 1.25rem;
}

.project-description {
  color: var(--vp-c-text-2);
  margin-bottom: 1.5rem;
  line-height: 1.6;
  flex-grow: 1;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.project-tag {
  background: var(--vp-c-bg);
  color: var(--vp-c-text-2);
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.9rem;
  border: 1px solid var(--vp-c-divider);
}

.project-link {
  color: var(--vp-c-brand);
  font-size: 0.9rem;
  font-weight: 500;
  text-align: right;
  transition: transform 0.2s ease;
  margin-top: auto;
}

@media (max-width: 768px) {
  .projects-container {
    padding: 1rem;
  }

  .intro-section h1 {
    font-size: 2.5rem;
  }

  .subtitle {
    font-size: 1.1rem;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>
