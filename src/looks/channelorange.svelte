<script lang="ts">
    import links from '../lib/links.js';
    import { longer_names } from '../lib/links.js';
    import { menuclicks } from '../lib/links.js';
    import name from '../r/i/channelorange.png';
    import explicit from '../r/i/explicit.png';
    import { onMount } from 'svelte';
    onMount(async () => {
      await import('./channelorange.css');
    });
    let album : HTMLDivElement;
    let turned = false;
    function turn(event: MouseEvent) {
        if (event.target.tagName != 'A') {
            turned = !turned;
            album.classList.toggle('turned');
            console.log("turned!")
        }
    }
</script>

<svelte:head>
    <meta name="theme-color" content="white" media="(prefers-color-scheme: light)">
    <meta name="theme-color" content="black" media="(prefers-color-scheme: dark)">
</svelte:head>
  
  <div class="look" id="look-channelorange">
  
    <main>

        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div bind:this={album} on:click={turn} id="album">
        
            <div id="album-content">
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
            <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
            <div id="front">
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <img src={name} alt="Jan Martchouk" id="name" on:click={()=> menuclicks.set($menuclicks + 1)}>
                <img id="explicit" src={explicit} alt="Parental Advisory Sticker" />
            </div>
            <div id="back">
                {#each Object.entries(links) as [key, value]}
                    <span class="link-category">
                    {#each Object.entries(value) as [k, v]}
                        <a href={v}>{k}</a>
                    {/each}
                    </span>
                {/each}
            </div>
            </div>
        </div>

    </main>
  
</div>
