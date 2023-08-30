<script lang="ts">
    export let text = "button";
    export let link = "#";
    export let icon = "▸"
    export let id = "button";

    var buttonStrings: Record<string, Record<string, string>> = {
    "en": {
      "insta": "instagram & threads",
      "youtube": "youtube",
      "bereal": "bereal",
      "graphics": "graphics",
      "plants": "plants",
      "pics": "pics",
      "towers": "towers",
      "letterboxd": "letterboxd",
      "musicboard": "musicboard",
      "goodreads": "goodreads",
    },
    "de": {
      "insta": "instagram & threads",
      "youtube": "youtube",
      "bereal": "bereal",
      "graphics": "grafiken",
      "plants": "pflanzen",
      "pics": "bilder",
      "towers": "türme",
      "letterboxd": "letterboxd",
      "musicboard": "musicboard",
      "goodreads": "goodreads"
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