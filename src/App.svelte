<script lang="ts">
  import Button from './lib/Button.svelte';
</script>

<main>

  <div class="center-container">

    <h1 id="name"><span class="name-word" id="firstname">Jan</span> <span class="name-word" id="lastname">Martchouk</span></h1>

    <details>
      <summary>social</summary>
      <Button id="insta" link="https://www.instagram.com/janmartchouk/"></Button>
      <Button id="youtube" link="https://www.youtube.com/@janmartchouk"></Button>
      <Button id="bereal" link="https://bere.al/janmartchouk"></Button>
    </details>
    <details>
    <summary>blogs</summary>
      <Button id="graphics" link="https://farbigstefarben.tumblr.com/"></Button>
      <Button id="plants" link="https://pollywoodgreenhouse.tumblr.com/"></Button>
      <Button id="pics" link="https://adidasfeetpics.tumblr.com/"></Button>
      <Button id="towers" link="https://tuermeinstaedten.tumblr.com/"></Button>
    </details>
    <details>
      <summary>media</summary>
      <Button id="letterboxd" link="https://letterboxd.com/janmartchouk"></Button>
      <Button id="musicboard" link="https://musicboard.app/jaaan"></Button>
      <Button id="goodreads" link=" https://www.goodreads.com/janmartchouk"></Button>
    </details>  
  </div>


</main>

<style>

</style>
