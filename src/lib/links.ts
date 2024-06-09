import { writable } from 'svelte/store';

const links : any = {
    social: {
      instagram: "https://instagram.com/janmartchouk",
      twitter: "https://twitter.com/janmartchouk",
      github: "https://github.com/janmartchouk",
    },
    blogs: {
      plants: "https://plants.martcho.uk",
      graphics: "https://graphics.martcho.uk",
      politics: "https://martcho.uk/blog",
    },
    media: {
      letterboxd: "https://letterboxd.com/janmartchouk",
      musicboard: "https://musicboard.app/janmartchouk",
      goodreads: "https://www.goodreads.com/janmartchouk"
    },
    apps: {
      chrono: 'https://martcho.uk/app/chrono',
    }
  }

export default links;

const longer_names : any = {
  social: "Social Media",
  blogs: "Blogs, Projects",
  media: "Music, Movie & Book Reviews",
  apps: "Web Apps",
}

export { longer_names }

let menuclicks = writable(0);

export { menuclicks }
