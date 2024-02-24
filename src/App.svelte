<script lang="ts">
  import Sky from './looks/sky.svelte'
  import Shining from './looks/shining.svelte'


  let looks: any[] = [Sky, Shining];

  // pick a random look
  let current_look = looks[Math.floor(Math.random() * looks.length)];

  // let current_look = Sky;

</script>

  <svelte:component this={current_look} />

<style>

</style>

