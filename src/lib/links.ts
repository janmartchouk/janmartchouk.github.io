import { writable } from 'svelte/store';

const links : any = {
    social: {
      instagram: "https://instagram.com/janmartchouk",
      twitter: "https://twitter.com/janmartchouk",
      github: "https://github.com/janmartchouk",
      bluesky: "https://bsky.app/profile/martcho.uk",
      mastodon: "https://mas.to/@janmartchouk"
    },
    blogs: {
      plants: "https://plants.martcho.uk",
      towers: "https://towers.martcho.uk",
      pics: "https://pics.martcho.uk",
      graphics: "https://graphics.martcho.uk",
    },
    media: {
      letterboxd: "https://letterboxd.com/janmartchouk",
      musicboard: "https://musicboard.app/janmartchouk",
      goodreads: "https://www.goodreads.com/janmartchouk"
    }
  }

export default links;

const longer_names : any = {
  social: "Social Media",
  blogs: "Blogs, Projects",
  media: "Music, Movie & Book Reviews"
}

export { longer_names }

let menuclicks = writable(0);

export { menuclicks }