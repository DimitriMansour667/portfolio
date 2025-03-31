---
layout: doc
title: Contact Me
---

# Get in Touch 📬

## Contact Information

### 📧 Email

For professional inquiries and collaborations

[dimi.mansour03@gmail.com](mailto:dimi.mansour03@gmail.com)

### 💼 LinkedIn

Connect with me professionally

[Dimitri Mansour](https://www.linkedin.com/in/dimitri-mansour-8012b2290/)

## Send me a Message

<form action="https://formspree.io/f/xanedenw" method="POST">
  <div class="form-group">
    <label for="name">Name</label>
    <input type="text" id="name" name="name" required>
  </div>
  
  <div class="form-group">
    <label for="email">Email</label>
    <input type="email" id="email" name="email" required>
  </div>
  
  <div class="form-group">
    <label for="subject">Subject</label>
    <input type="text" id="subject" name="subject" required>
  </div>
  
  <div class="form-group">
    <label for="message">Message</label>
    <textarea id="message" name="message" rows="5" required></textarea>
  </div>
  
  <button type="submit" class="submit-btn">Send Message</button>
</form>

<style>
.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: var(--vp-c-text-1);
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--vp-c-brand);
}

.submit-btn {
  display: block;
  width: 100%;
  padding: 1rem;
  background: var(--vp-c-brand-2);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.2s;
}

.submit-btn:hover {
  background: var(--vp-c-brand-dark);
}
</style>
