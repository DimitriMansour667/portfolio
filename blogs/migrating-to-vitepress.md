---
layout: doc
---

<div class="blog-post-container">
  <a href="/blog" class="back-button">
    <span class="back-arrow">←</span> Back to Blog
  </a>
</div>

<style scoped>

.back-button {
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  border-radius: 8px;
  text-decoration: none;
  font-size: 0.9rem;
  transition: all 0.2s ease;
  border: 1px solid var(--vp-c-divider);
  margin-bottom: 2rem;
}

.back-button:hover {
  background: var(--vp-c-bg);
  transform: translateX(-4px);
}

.back-arrow {
  margin-right: 0.5rem;
  font-size: 1.1rem;
}
</style>

# Migrating Everything to VitePress

<sub>March 31, 2025</sub>

### The Hunt

My original portfolio was built with SvelteKit, but over time, it felt like overkill for what I needed—a simple, fast, and lightweight site to showcase my work. That led me on a hunt for a new web framework to rebuild my portfolio.

<sub>Image 1: My original portfolio in SvelteKit</sub>
![The Hunt](/blog_image/1/portfolio.png)

Initially, I considered Next.js. I'm well-versed in React, and my past experience with it made it an appealing option. With a wealth of prebuilt UI libraries, especially shadcn/ui, it seemed like a solid choice.

I also looked into Vue and Nuxt. I've used both before and was familiar with their ecosystems. However, as I dug deeper, I realized that even these options might be more than I needed.

### Static Site Generators

Given that my portfolio is mostly static content, I started exploring static site generators (SSGs). These would offer better performance, simpler deployment, and fewer moving parts compared to a full-fledged framework.

That's when I landed on VitePress.

### VitePress for Crimps

I had already used VitePress for my Crimps project, which is built with Flutter and PocketBase. The experience was smooth, and I appreciated its simplicity and performance. Since I was already familiar with it, migrating my portfolio to VitePress felt like a natural choice.

### Switching to VitePress

VitePress provides:

Lightning-fast performance due to its Vite-powered engine

Markdown-based content management, making writing blog posts effortless

Minimal configuration while still allowing customization

Great developer experience with instant hot module replacement (HMR)

It checked all the boxes for what I needed. Unlike SvelteKit or Next.js, it didn't feel like overkill. Instead, it was the perfect balance of simplicity and power.

### The Future

Now that my portfolio is on VitePress, I'm excited about the possibilities. The new setup is lean, easy to maintain, and lets me focus on writing and showcasing my work rather than managing a complex framework.

Looking ahead, I might experiment with:

Custom styling and components to make the site feel more unique

Automating deployments for an even smoother workflow

For now, though, I'm happy with the move. If you're looking for a lightweight, fast, and simple way to build a personal site, VitePress is definitely worth considering.
