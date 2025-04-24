<script setup>
const experience = [
  {
    title: "Tools Developer Intern",
    company: "Krafton",
    location: "Montreal, QC, Canada",
    period: "August 2024 - December 2024",
    points: [
      "Designed and Implemented several APIs using Python with FastAPI and C# with .NET",
      "Executed stress test scripts with Python using MatPlotLib",
      "Integrated pipelines for API testing in GitHub and TeamCity",
      "Contributed tools and Python scripts for Perforce integration",
      "Migrated tools to Linux servers and Docker environments",
    ],
  },
  {
    title: "Start-up Software Developer",
    company: "Crimps",
    location: "Montreal, QC, Canada",
    period: "January 2024 - Present",
    points: [
      "Created and launched a mobile app for bouldering session tracking",
      "Developed using Dart and Flutter with Self-Hosted Backend",
      "Successfully published on iOS and Android stores",
      "Built promotional website using Next.js",
      "Implemented GitHub Actions pipelines for development",
    ],
  },
];

const skills = {
  languages: [
    "C#",
    "Dart",
    "Java",
    "JavaScript",
    "TypeScript",
    "C++",
    "C",
    "Python",
    "Go",
    "Rust",
  ],
  frameworks: [
    "FastAPI",
    "Flask",
    "Django",
    "Node.js",
    "Express",
    "React",
    "Next.js",
    "Nuxt",
    "Vue",
    "Svelte",
    "Flutter",
    "Tauri",
    "Wails",
    "Electron",
  ],
  databases: ["MongoDB", "PostgreSQL", "MySQL", "SQLite"],
  tools: [
    "Docker",
    "GitHub Actions",
    "CI/CD",
    "TeamCity",
    "Gitlab CI/CD",
    "Git",
    "Jira",
    "AWS",
    "Azure",
    "Google Cloud",
    "Firebase",
    "Supabase",
    "Unit Testing",
    "OOP",
    "Design Patterns",
    "Godot",
    "Unreal Engine",
    "Unity",
  ],
};

const education = [
  {
    school: "Polytechnique Montreal",
    period: "2022 - Present",
    degree: "Bachelor of Engineering",
    major: "Major in Software Engineering",
  },
  {
    school: "Collège Bois-de-Boulogne",
    period: "2020 - 2022",
    degree: "Computer Science Degree",
  },
];

const activities = [
  "VP Hackathon PolyHacks Committee (2023 - Present)",
  "VP Software Engineering Student Committee (2024 - 2025)",
  "2nd Place Winner, Bois-de-Boulogne GameJam (2022)",
  "2nd Place Winner, UdemHacks (2025)",
];
</script>

<template>
  <div class="about-container">
    <section class="intro-section">
      <h1>About Me 👋</h1>
      <div class="intro-content">
        <div class="intro-text">
          <p>
            Hey there! I'm Dimitri, a software engineer who loves turning ideas
            into reality through code. I'm passionate about creating engaging
            experiences, whether it's through game development or building
            innovative web applications.
          </p>
          <p>
            Currently, I'm pursuing my Bachelor of Engineering at Polytechnique
            Montreal while working on exciting projects that combine my love for
            technology and creativity.
          </p>
        </div>
      </div>
    </section>

    <section class="experience-section">
      <h2>Professional Experience 💼</h2>
      <div class="experience-grid">
        <div
          v-for="(job, index) in experience"
          :key="index"
          class="experience-card"
        >
          <div class="card-content">
            <h3>{{ job.title }} at {{ job.company }}</h3>
            <div class="job-details">
              <span class="location">{{ job.location }}</span>
              <span class="period">{{ job.period }}</span>
            </div>
            <ul>
              <li v-for="(point, pIndex) in job.points" :key="pIndex">
                {{ point }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="skills-section">
      <h2>My Toolbox 🛠️</h2>
      <div class="skills-grid">
        <div class="skill-card">
          <div class="card-content">
            <h3>Programming Languages</h3>
            <div class="skill-tags">
              <span
                v-for="(lang, index) in skills.languages"
                :key="index"
                class="skill-tag"
              >
                {{ lang }}
              </span>
            </div>
          </div>
        </div>

        <div class="skill-card">
          <div class="card-content">
            <h3>Frameworks & Libraries</h3>
            <div class="skill-tags">
              <span
                v-for="(framework, index) in skills.frameworks"
                :key="index"
                class="skill-tag"
              >
                {{ framework }}
              </span>
            </div>
          </div>
        </div>

        <div class="skill-card">
          <div class="card-content">
            <h3>Databases</h3>
            <div class="skill-tags">
              <span
                v-for="(db, index) in skills.databases"
                :key="index"
                class="skill-tag"
              >
                {{ db }}
              </span>
            </div>
          </div>
        </div>

        <div class="skill-card">
          <div class="card-content">
            <h3>Tools & Technologies</h3>
            <div class="skill-tags">
              <span
                v-for="(tool, index) in skills.tools"
                :key="index"
                class="skill-tag"
              >
                {{ tool }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="education-section">
      <h2>Education & Activities 📚</h2>
      <div class="education-grid">
        <div class="education-card">
          <div class="card-content">
            <h3>Education</h3>
            <div
              v-for="(edu, index) in education"
              :key="index"
              class="education-item"
            >
              <h4>{{ edu.school }}</h4>
              <div class="education-details">
                <span class="period">{{ edu.period }}</span>
                <p class="degree">{{ edu.degree }}</p>
                <p v-if="edu.major" class="major">{{ edu.major }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="education-card">
          <div class="card-content">
            <h3>Extracurricular Activities</h3>
            <ul class="activities-list">
              <li v-for="(activity, index) in activities" :key="index">
                {{ activity }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.about-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  position: relative;
  overflow: hidden;
}

.about-container::before {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    45deg,
    var(--vp-c-brand-soft) 0%,
    var(--vp-c-bg-soft) 50%,
    var(--vp-c-brand-soft) 100%
  );
  background-size: 400% 400%;
  animation: gradientBG 15s ease infinite;
  z-index: -1;
  opacity: 0.3;
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
.experience-section,
.skills-section,
.education-section {
  position: relative;
  z-index: 1;
}

.intro-section {
  text-align: center;
  margin-bottom: 4rem;
}

.intro-section h1 {
  font-size: 3rem;
  margin-bottom: 2rem;
  color: var(--vp-c-text-1);
  letter-spacing: -0.02em;
  line-height: 1.2;
}

.intro-content {
  max-width: 800px;
  margin: 0 auto;
}

.intro-text {
  font-size: 1.2rem;
  line-height: 1.6;
  color: var(--vp-c-text-2);
}

.intro-text p {
  margin-bottom: 1rem;
}

section {
  margin-bottom: 4rem;
}

h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
  color: var(--vp-c-text-1);
}

.experience-grid,
.skills-grid,
.education-grid {
  display: grid;
  gap: 2rem;
}

.experience-grid {
  grid-template-columns: 1fr;
}

.skills-grid {
  grid-template-columns: repeat(2, 1fr);
}

.education-grid {
  grid-template-columns: repeat(2, 1fr);
}

.experience-card,
.skill-card,
.education-card {
  position: relative;
  background: var(--vp-c-bg-soft);
  padding: 1.5rem;
  border-radius: 12px;
  border: 1px solid transparent;
  overflow: hidden;
  transition: transform 0.2s ease;
}

.experience-card:hover,
.skill-card:hover,
.education-card:hover {
  transform: translateY(-4px);
}

.experience-card::before,
.skill-card::before,
.education-card::before {
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

.experience-card:hover::before,
.skill-card:hover::before,
.education-card:hover::before {
  opacity: 1;
}

.card-content {
  position: relative;
  z-index: 1;
}

.job-details {
  display: flex;
  justify-content: space-between;
  color: var(--vp-c-text-2);
  margin-bottom: 1rem;
  font-size: 0.9rem;
}

ul {
  list-style-type: none;
  padding: 0;
}

ul li {
  margin-bottom: 0.5rem;
  color: var(--vp-c-text-2);
  position: relative;
  padding-left: 1.5rem;
}

ul li::before {
  content: "•";
  color: var(--vp-c-brand);
  position: absolute;
  left: 0;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-tag {
  background: var(--vp-c-bg);
  color: var(--vp-c-text-2);
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.9rem;
  border: 1px solid var(--vp-c-divider);
}

.education-item {
  margin-bottom: 1.5rem;
}

.education-item:last-child {
  margin-bottom: 0;
}

.education-details {
  color: var(--vp-c-text-2);
}

.education-details .period {
  font-size: 0.9rem;
}

.activities-list li {
  margin-bottom: 1rem;
}

@media (max-width: 768px) {
  .skills-grid,
  .education-grid {
    grid-template-columns: 1fr;
  }

  .about-container {
    padding: 1rem;
  }

  .intro-section h1 {
    font-size: 2.5rem;
  }

  .intro-text {
    font-size: 1.1rem;
  }
}
</style>
