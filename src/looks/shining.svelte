<script lang="ts">
    import './shining.css'
    import links from '../lib/links.js';
    import { longer_names } from '../lib/links.js';
    console.log(longer_names.social)

    let src = "src/r/i/jan-shining-transparent.png";
</script>

<svelte:head>
    <meta name="theme-color" content="#fce800" media="(prefers-color-scheme: light)">
    <meta name="theme-color" content="#000" media="(prefers-color-scheme: dark)">
    <!-- <link rel="stylesheet" href="src/looks/shining.css"> -->
</svelte:head>
  
  <div class="look" id="look-shining">
  
    <main>

        <h1>This is<br>An Internet Presence</h1>

        <img class="name" id="name" alt="Jan Martchouk" src={src} />
    
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
