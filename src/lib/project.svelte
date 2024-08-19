<script>
  export let title;
  export let description;
  export let image;
  export let link;
</script>

<article>
  <header>
    <a href={link}>
      <!-- svelte-ignore a11y-missing-attribute -->
      <img src={image} />
    </a>
  </header>
  <hgroup>
    <p>{title}</p>
    <p>{description}</p>
  </hgroup>
</article>

<style>
  article > header {
    display: flex;
    justify-content: center;
  }
  img {
    height: 10rem;
  }
  header {
    padding: 0 0 0 0;
  }
</style>
