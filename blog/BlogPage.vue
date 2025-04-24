<script setup>
const blogPosts = [
  {
    link: "migrating-to-vitepress",
    title: "Migrating Everything to VitePress",
    summary:
      "Searching for a new web framework to rebuild my portfolio, I found VitePress to be the perfect fit.",
    date: "2025-03-31",
  },
];

const formatDate = (dateString) => {
  const [year, month, day] = dateString.split("-").map(Number);
  const date = new Date(year, month - 1, day);
  const options = { year: "numeric", month: "long", day: "numeric" };
  return date.toLocaleDateString("en-US", options);
};
</script>

<template>
  <div class="blog-container">
    <section class="intro-section">
      <h1>My Blog 📝</h1>
      <p class="subtitle">
        Thoughts, experiences, and learnings from my journey in software
        engineering
      </p>
    </section>

    <section class="posts-section">
      <div class="posts-list">
        <a
          v-for="post in blogPosts"
          :key="post.link"
          :href="`/blogs/${post.link}`"
          class="post-item"
        >
          <div class="post-content">
            <div class="post-header">
              <h2 class="post-title">{{ post.title }}</h2>
              <span class="post-date">{{ formatDate(post.date) }}</span>
            </div>
            <p class="post-summary">{{ post.summary }}</p>
            <div class="read-more">Read more →</div>
          </div>
        </a>
      </div>
    </section>
  </div>
</template>

<style scoped>
.blog-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  position: relative;
  overflow: hidden;
}

.blog-container::before {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: radial-gradient(
    var(--vp-c-brand-soft) 2px,
    transparent 2px
  );
  background-size: 30px 30px;
  z-index: -1;
  opacity: 0.5;
  pointer-events: none;
}

/* Remove the after pseudo-element since we don't need it anymore */
.blog-container::after {
  display: none;
}

/* Remove the gradient animation since we don't need it anymore */
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
.posts-section {
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

.posts-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.post-item {
  position: relative;
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
  border: 1px solid transparent;
  overflow: hidden;
  transition: transform 0.2s ease;
  text-decoration: none;
  display: block;
  color: inherit;
}

.post-item:hover {
  transform: translateY(-4px);
}

.post-item::before {
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

.post-item:hover::before {
  opacity: 1;
}

.post-content {
  position: relative;
  z-index: 1;
  padding: 2rem;
}

.post-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.post-title {
  margin: 0;
  color: var(--vp-c-text-1);
  font-size: 1.5rem;
}

.post-date {
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
}

.post-summary {
  color: var(--vp-c-text-2);
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.read-more {
  color: var(--vp-c-brand);
  font-size: 0.9rem;
  font-weight: 500;
  transition: transform 0.2s ease;
  display: inline-block;
}

.post-item:hover .read-more {
  transform: translateX(4px);
}

@media (max-width: 768px) {
  .blog-container {
    padding: 1rem;
  }

  .intro-section h1 {
    font-size: 2.5rem;
  }

  .subtitle {
    font-size: 1.1rem;
  }

  .post-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }

  .post-content {
    padding: 1.5rem;
  }
}
</style>
