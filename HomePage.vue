<script setup>
const features = [
  {
    icon: "🎉",
    title: "Check out my new App Crimps",
    description:
      "The climbing app I'm working on with my friend. Version 0.2.1 is now available on the App Store and Google Play.",
    link: "https://crimps.ca",
    linkText: "View the App",
  },
  {
    icon: "🚀",
    title: "Check out my projects",
    description:
      "There are several projects I've worked on, and I'm working on more.",
    link: "/projects",
    linkText: "View All My Projects",
  },
  {
    icon: "📝",
    title: "Check out my blog",
    description:
      "I write about my experiences and learnings in the software engineering field.",
    link: "/blog",
    linkText: "View All My Blog Posts",
  },
];

const handleClick = (link) => {
  if (link) {
    window.open(link, "_blank");
  }
};
</script>

<template>
  <div class="home-container">
    <section class="hero-section">
      <div class="hero-content">
        <h1>Hi, I'm Dimitri 👋</h1>
        <p class="tagline">
          I'm a software engineer with a passion for new technologies and a love
          for building new projects.
        </p>
        <div class="hero-actions">
          <a
            href="/cv.pdf"
            target="_blank"
            class="action-button primary"
            role="button"
          >
            View My Resume
          </a>
          <a
            href="mailto:dimitri@dimitrimansour.com"
            target="_blank"
            class="action-button secondary"
            role="button"
          >
            Contact Me by Email
          </a>
        </div>
      </div>
      <div class="hero-image">
        <img src="/profil.png" alt="Dimitri Mansour" />
      </div>
    </section>

    <section class="features-section">
      <div class="features-grid">
        <div
          v-for="feature in features"
          :key="feature.title"
          class="feature-card"
          :class="{ 'has-link': feature.link }"
          @click="handleClick(feature.link)"
          role="button"
          tabindex="0"
        >
          <div class="card-content">
            <div class="feature-header">
              <span class="feature-icon">{{ feature.icon }}</span>
              <h3>{{ feature.title }}</h3>
            </div>
            <p class="feature-description">{{ feature.description }}</p>
            <div v-if="feature.link" class="feature-link">
              {{ feature.linkText }} →
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  position: relative;
  overflow: hidden;
}

.home-container::before {
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
.hero-section,
.features-section {
  position: relative;
  z-index: 1;
}

.hero-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  margin-bottom: 4rem;
}

.hero-content {
  text-align: left;
}

.hero-content h1 {
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  color: var(--vp-c-text-1);
  letter-spacing: -0.02em;
  line-height: 1.2;
}

.tagline {
  font-size: 1.5rem;
  color: var(--vp-c-text-2);
  margin-bottom: 2rem;
  line-height: 1.6;
}

.hero-actions {
  display: flex;
  gap: 1rem;
}

.action-button {
  display: inline-block;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s ease;
}

.action-button.primary {
  background: var(--vp-button-brand-bg);
  color: var(--vp-button-brand-text);
}

.action-button.primary:hover {
  background: var(--vp-button-brand-hover-bg);
  transform: translateY(-2px);
}

.action-button.secondary {
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  border: 1px solid var(--vp-c-divider);
}

.action-button.secondary:hover {
  background: var(--vp-c-bg);
  transform: translateY(-2px);
}

.hero-image {
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-image img {
  max-width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.features-section {
  margin-top: 4rem;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.feature-card {
  position: relative;
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
  border: 1px solid transparent;
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease;
}

.feature-card:hover {
  transform: translateY(-4px);
}

.feature-card::before {
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

.feature-card:hover::before {
  opacity: 1;
}

.feature-card.has-link {
  cursor: pointer;
}

.card-content {
  position: relative;
  z-index: 1;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.feature-header {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  gap: 0.75rem;
}

.feature-icon {
  font-size: 1.5rem;
}

.feature-header h3 {
  margin: 0;
  color: var(--vp-c-text-1);
  font-size: 1.25rem;
}

.feature-description {
  color: var(--vp-c-text-2);
  margin-bottom: 1.5rem;
  line-height: 1.6;
  flex-grow: 1;
}

.feature-link {
  color: var(--vp-c-brand);
  font-size: 0.9rem;
  font-weight: 500;
  text-align: right;
  transition: transform 0.2s ease;
  margin-top: auto;
}

.feature-card:hover .feature-link {
  transform: translateX(4px);
}

@media (max-width: 768px) {
  .home-container {
    padding: 1rem;
  }

  .hero-section {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }

  .hero-content {
    text-align: center;
  }

  .hero-content h1 {
    font-size: 2.5rem;
  }

  .tagline {
    font-size: 1.25rem;
  }

  .hero-actions {
    justify-content: center;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }
}
</style>
