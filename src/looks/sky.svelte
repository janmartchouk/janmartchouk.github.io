<script lang="ts">
  import Button from '../lib/Button.svelte';
  import links from '../lib/links.js';

</script>

<svelte:head>
    <meta name="theme-color" content="#52a8df" media="(prefers-color-scheme: light)">
    <meta name="theme-color" content="#040404" media="(prefers-color-scheme: dark)">
    <link rel="stylesheet" href="src/looks/sky.css">
</svelte:head>

<!-- make animation toggle-able -->

<div class="look" id="look-sky">

    <input type="checkbox" id="play-pause" /><label for="play-pause" id="play-pause-label" class="win-button"></label>

    <main>

      <div class="center-container">
      
        <h1 id="name"><span class="name-word" id="firstname">Jan</span> <span class="name-word" id="lastname">Martchouk</span></h1>
      
        {#each Object.entries(links) as [key, value]}
            <details>
            <summary>{key}</summary>
            {#each Object.entries(value) as [k, v]}
                <Button rel="me" text={k.toString()} link={v}></Button>
            {/each}
            </details>
        {/each}

      </div>

    </main>

  </div>