<script lang="ts">
    export let text = "button";
    export let link = "#";
    export let icon = "▸"
    export let id = "button";

    var buttonStrings: Record<string, Record<string, string>> = {
    "en": {
      "insta": "instagram & threads",
      "graphics": "graphics",
      "plants": "plants",
      "pics": "pics",
      "towers": "towers"
    },
    "de": {
      "insta": "instagram & threads",
      "graphics": "grafiken",
      "plants": "pflanzen",
      "pics": "bilder",
      "towers": "türme"
    }
  }

    let userLang:string = navigator.language;
    if (userLang == "de" || userLang == "de-DE") {
        text = buttonStrings.de[id];
    } else {
        text = buttonStrings.en[id];
    }
    
    console.log(userLang)

</script>

<a role="button" class="button" id={id} href={link}>
    <span class="button-icon">{icon}</span>{text}
</a>