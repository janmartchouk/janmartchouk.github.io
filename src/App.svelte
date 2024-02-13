<script lang="ts">
  import Button from './lib/Button.svelte';
</script>

<!-- make animation toggle-able -->
<input type="checkbox" id="play-pause" /><label for="play-pause" id="play-pause-label" class="win-button"></label>

<main>

  <div class="center-container">

    <h1 id="name"><span class="name-word" id="firstname">Jan</span> <span class="name-word" id="lastname">Martchouk</span></h1>

    <details>
      <summary>social</summary>
      <Button rel="me" id="insta" link="https://www.instagram.com/janmartchouk/"></Button>
      <Button rel="me" id="twitter" link="https://x.com/janmartchouk"></Button>
      <Button rel="me" id="github" link="https://github.com/janmartchouk"></Button>
      <Button rel="me" id="bluesky" link="https://bsky.app/profile/martcho.uk"></Button>
      <Button rel="me" id="mastodon" link="https://mas.to/@janmartchouk"></Button>
    </details>
    <details>
    <summary>blogs</summary>
      <Button id="graphics" link="https://graphics.martcho.uk/"></Button>
      <Button id="plants" link="https://plants.martcho.uk/"></Button>
      <Button id="pics" link="https://pics.martcho.uk/"></Button>
      <Button id="towers" link="https://towers.martcho.uk/"></Button>
    </details>
    <details>
      <summary>media</summary>
      <Button rel="me" id="letterboxd" link="https://letterboxd.com/janmartchouk"></Button>
      <Button rel="me" id="musicboard" link="https://musicboard.app/janmartchouk"></Button>
      <Button rel="me" id="goodreads" link=" https://www.goodreads.com/janmartchouk"></Button>
    </details>  
  </div>


</main>

<style>

</style>

