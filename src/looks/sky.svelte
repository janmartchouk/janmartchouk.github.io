<script lang="ts">
  import Button from '../lib/Button.svelte';
  import links from '../lib/links.js';
  import './sky.css'
  import {menuclicks} from '../lib/links.js';
</script>

<svelte:head>
    <meta name="theme-color" content="#52a8df" media="(prefers-color-scheme: light)">
    <meta name="theme-color" content="#040404" media="(prefers-color-scheme: dark)">
</svelte:head>

<!-- make animation toggle-able -->

<div class="look" id="look-sky">

    <input type="checkbox" id="play-pause" /><label for="play-pause" id="play-pause-label" class="win-button"></label>

    <main>

      <div class="center-container">
      
        <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <h1 
        on:click={()=> menuclicks.set($menuclicks + 1)}
        id="name"><span class="name-word" id="firstname">Jan</span> <span class="name-word" id="lastname">Martchouk</span></h1>
      
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