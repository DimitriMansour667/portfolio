<script>
  import Project from "$lib/project.svelte";
</script>

<article>
  <header>
    <hgroup>
      <h2 class="pico-color-pink-500">Projects</h2>
      <p>Here are some of the projects I've worked on.</p>
    </hgroup>
  </header>

  <div class="grid">
    <div>
      <Project
        title="Tower of Mamel"
        description="video game using Godot"
        image="towerofmamel.png"
        link="https://roboterrifiant.itch.io/tower-of-mamel"
      />
      <Project
        title="Blood Shake"
        description="video game using Unity"
        image="bloodshake.jpg"
        link="https://survexa.itch.io/blood-shake"
      />
    </div>
    <div>
      <Project
        title="File Share"
        description="file manager using Svelte and FastAPI"
        image="fileshare.png"
        link="https://github.com/DimitriMansour667/FileShare"
      />
      <Project
        title="DimiLIB"
        description="AI tool using Streamlit and OpenAI"
        image="dimilib.png"
        link="https://dimilib.streamlit.app/"
      />
    </div>
    <div></div>
  </div>
</article>
