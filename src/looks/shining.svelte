<script lang="ts">
    import links from '../lib/links.js';
    import { longer_names } from '../lib/links.js';
    import name from "../r/i/jan-shining-transparent.png";
    import { menuclicks } from '../lib/links.js';
    import { onMount } from 'svelte';
    onMount(async () => {
      await import('./shining.css');
    });
</script>

<svelte:head>
    <meta name="theme-color" content="#fce800" media="(prefers-color-scheme: light)">
    <meta name="theme-color" content="#000" media="(prefers-color-scheme: dark)">
</svelte:head>
  
  <div class="look" id="look-shining">
  
    <main>

        <h1>This is<br>An Internet Presence</h1>

        <img class="name" id="name" alt="Jan Martchouk" src={name} on:click={()=> menuclicks.set($menuclicks + 1)}/>
    
        <div id=text-container>
            <span id="link-heading">World Wide Web</span><br>
            {#each Object.entries(links) as [key, value]}
                <span class="link-category">
                <b>{longer_names[key]}</b>
                {#each Object.entries(value) as [k, v]}
                    <a href={v}>{k}</a>
                {/each}
                </span>
            {/each}
        </div>

    </main>
  
</div>
