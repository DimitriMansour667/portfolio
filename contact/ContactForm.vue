<script setup>
import { ref } from "vue";

const formData = ref({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const isSubmitting = ref(false);
const submitSuccess = ref(false);
const submitError = ref(false);

const handleSubmit = async (e) => {
  e.preventDefault();
  isSubmitting.value = true;
  submitError.value = false;
  submitSuccess.value = false;

  try {
    const response = await fetch("https://formspree.io/f/xanedenw", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData.value),
      mode: "cors",
      credentials: "omit",
    });

    if (response.ok) {
      submitSuccess.value = true;
      formData.value = { name: "", email: "", subject: "", message: "" };
    } else {
      const errorData = await response.json().catch(() => ({}));
      console.error("Form submission error:", errorData);
      submitError.value = true;
    }
  } catch (error) {
    console.error("Form submission error:", error);
    // Check if it's a CORS error
    if (error.name === "TypeError" && error.message.includes("CORS")) {
      submitError.value = true;
      // You might want to show a more specific message for CORS errors
      alert(
        "Unable to submit form due to browser security restrictions. Please try using a different browser or contact directly via email."
      );
    } else {
      submitError.value = true;
    }
  } finally {
    isSubmitting.value = false;
  }
};

const handleEmailClick = () => {
  window.location.href = "mailto:dimi.mansour03@gmail.com";
};

const handleLinkedInClick = () => {
  window.open(
    "https://www.linkedin.com/in/dimitri-mansour-8012b2290/",
    "_blank"
  );
};
</script>

<template>
  <div class="contact-container">
    <div class="contact-header">
      <h1>Get in Touch 📬</h1>
      <p class="subtitle">
        Let's connect and create something amazing together. Whether you have
        questions, ideas, or just want to say hi, I'm all ears.
      </p>
    </div>

    <div class="contact-content">
      <div class="contact-info">
        <div
          class="info-card"
          @click="handleEmailClick"
          tabindex="0"
          role="button"
        >
          <div class="card-content">
            <div class="icon">📧</div>
            <h3>Email</h3>
            <p>For professional inquiries and collaborations</p>
            <span class="contact-text">dimi.mansour03@gmail.com</span>
          </div>
        </div>

        <div
          class="info-card"
          @click="handleLinkedInClick"
          tabindex="0"
          role="button"
        >
          <div class="card-content">
            <div class="icon">💼</div>
            <h3>LinkedIn</h3>
            <p>Connect with me professionally</p>
            <span class="contact-text">Dimitri Mansour</span>
          </div>
        </div>
      </div>

      <form @submit="handleSubmit" class="contact-form">
        <div class="form-group">
          <label for="name">Name</label>
          <input
            type="text"
            id="name"
            v-model="formData.name"
            required
            placeholder="Your name"
          />
        </div>

        <div class="form-group">
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            v-model="formData.email"
            required
            placeholder="your.email@example.com"
          />
        </div>

        <div class="form-group">
          <label for="subject">Subject</label>
          <input
            type="text"
            id="subject"
            v-model="formData.subject"
            required
            placeholder="What's this about?"
          />
        </div>

        <div class="form-group">
          <label for="message">Message</label>
          <textarea
            id="message"
            v-model="formData.message"
            rows="5"
            required
            placeholder="Your message here..."
          ></textarea>
        </div>

        <button type="submit" class="submit-btn" :disabled="isSubmitting">
          <span v-if="isSubmitting">Sending...</span>
          <span v-else>Send Message</span>
        </button>

        <div v-if="submitSuccess" class="alert success">
          Message sent successfully! I'll get back to you soon.
        </div>

        <div v-if="submitError" class="alert error">
          <p>Oops! Something went wrong. Please try again later.</p>
          <p class="error-details">
            If the problem persists, you can reach me directly at
            <a href="mailto:dimi.mansour03@gmail.com"
              >dimi.mansour03@gmail.com</a
            >
          </p>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.contact-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  position: relative;
  overflow: hidden;
}

.contact-container::before {
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

.contact-container::after {
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
.contact-header,
.contact-content {
  position: relative;
  z-index: 1;
}

.contact-header {
  text-align: center;
  margin-bottom: 4rem;
  padding: 0 1rem;
}

.contact-header h1 {
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

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 4rem;
  align-items: start;
  margin-top: 0;
  padding: 0 1rem;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.info-card {
  position: relative;
  background: var(--vp-c-bg-soft);
  padding: 1.5rem;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid transparent;
  overflow: hidden;
  transform: translateY(0);
}

.info-card:hover {
  transform: translateY(-4px);
}

.info-card::before {
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

.info-card:hover::before,
.info-card:focus::before {
  opacity: 1;
}

.info-card:hover,
.info-card:focus {
  outline: none;
}

.card-content {
  position: relative;
  z-index: 1;
}

.icon {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.info-card h3 {
  margin-bottom: 0.5rem;
  color: var(--vp-c-text-1);
}

.info-card p {
  color: var(--vp-c-text-2);
  margin-bottom: 1rem;
  font-size: 0.95rem;
}

.contact-text {
  color: var(--vp-c-brand);
  font-weight: 500;
  font-size: 0.95rem;
}

.contact-form {
  background: var(--vp-c-bg-soft);
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid var(--vp-c-divider);
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: var(--vp-c-text-1);
  font-weight: 500;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  transition: all 0.2s;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--vp-c-brand);
  box-shadow: 0 0 0 3px rgba(var(--vp-c-brand-rgb), 0.1);
}

.submit-btn {
  display: block;
  width: 100%;
  padding: 1rem;
  background: var(--vp-button-brand-bg);
  color: var(--vp-button-brand-text);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.2s;
}

.submit-btn:hover:not(:disabled) {
  background: var(--vp-button-brand-hover-bg);
  transform: translateY(-2px);
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.alert {
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
}

.success {
  background: rgba(40, 167, 69, 0.1);
  color: #28a745;
  border: 1px solid rgba(40, 167, 69, 0.2);
}

.error {
  background: rgba(220, 53, 69, 0.1);
  color: #dc3545;
  border: 1px solid rgba(220, 53, 69, 0.2);
}

.error-details {
  font-size: 0.9rem;
  margin-top: 0.5rem;
}

.error-details a {
  color: var(--vp-c-brand);
  text-decoration: underline;
}

@media (max-width: 768px) {
  .contact-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .contact-container {
    padding: 1rem;
    margin-top: 1rem;
  }

  .contact-header h1 {
    font-size: 2.5rem;
  }

  .subtitle {
    font-size: 1.1rem;
  }
}
</style>
