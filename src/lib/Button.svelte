<script lang="ts">
    export let text = "button";
    export let link = "#";
    export let icon = "▸"
    export let id = "button";
    export let rel = "null";

</script>

<a role="button" class="button" rel={rel} href={link}>
    <span class="button-icon">{icon}</span>{text}
</a>

