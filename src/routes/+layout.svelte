<script>
  import "../css/pico.min.css";
  import "../css/pico.colors.css";
</script>

<header class="container">
  <nav>
    <ul>
      <li>
        <a href="/">
          <!-- svelte-ignore a11y-missing-attribute -->
          <img style="width: 5rem;" src="dm-high-resolution-logo.png" />
        </a>
      </li>
    </ul>
    <ul>
      <li><a href="/" class="contrast">About</a></li>
      <li><a href="/experiences" class="contrast">Experiences</a></li>
      <li><a href="/projects" class="contrast">Projects</a></li>
      <li><a href="/contact" class="contrast">Contact</a></li>
    </ul>
  </nav>
</header>

<main class="container">
  <slot />
</main>

<footer class="container">
  <p>
    <small>&copy; 2024 Dimitri Mansour</small>
  </p>
</footer>
