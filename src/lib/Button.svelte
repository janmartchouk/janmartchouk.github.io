<script lang="ts">
    export let text = "button";
    export let link = "#";
    export let icon = "▸"
    export let id = "button";
    export let rel = "null";

    var buttonStrings: Record<string, Record<string, string>> = {
    "en": {
      "insta": "instagram & threads",
      "youtube": "youtube",
      "bereal": "bereal",
      "github": "github",
      "graphics": "graphics",
      "plants": "plants",
      "pics": "pics",
      "towers": "towers",
      "letterboxd": "letterboxd",
      "musicboard": "musicboard",
      "goodreads": "goodreads",
    },
    "de": {
      "graphics": "grafiken",
      "plants": "pflanzen",
      "pics": "bilder",
      "towers": "türme",
    }
  }

    let userLang:string = navigator.language;
    text = buttonStrings.en[id];
    if (userLang == "de" || userLang == "de-DE") {
        if (id in buttonStrings.de) {
            text = buttonStrings.de[id];
        }
    }
    
    console.log(userLang)

</script>

<a role="button" class="button" rel={rel} id={id} href={link}>
    <span class="button-icon">{icon}</span>{text}
</a>