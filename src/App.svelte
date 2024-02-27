<script lang="ts">
  import Sky from './looks/sky.svelte'
  import Shining from './looks/shining.svelte'

  import { menuclicks } from './lib/links';
  import Channelorange from './looks/channelorange.svelte';

  let looks: any[] = [
    Sky, 
    Shining, 
    Channelorange
  ];

  // pick a random look
  let current_look = Math.floor(Math.random() * looks.length);

  let clickable: HTMLDetailsElement;

  function change_look(idx: number) {
    if (idx === current_look) return;
    current_look = idx;
    clickable.open = false;
    menuclicks.set(0)
  }

  // current_look = 2;

</script>

{#if $menuclicks > 2}
<details bind:this={clickable} id="look-picker">
  <summary>🎨</summary>
  <!-- change looks -->
  <p on:click={() => change_look(0)}>⛅</p>
  <p on:click={() => change_look(1)}>🌟</p>
  <p on:click={() => change_look(2)}>🍊</p>
</details>
{/if}

<svelte:component this={looks[current_look]} />

<style>

</style>

