const es2015 = require('babel-preset-es2015');
const presetReact = require('babel-preset-react');
require("babel-register")({
  presets: [es2015, presetReact]
});
const Sitemap = require("react-router-sitemap").default;
const contentful = require('contentful');

const routes = [{
    path: '/',
  },
  {
    path: '/order',
  },
  {
    path: '/nda',
  },
  {
    path: '/privacy',
  },
  {
    path: '/blog',
  },
  {
    path: '/blog/post/:slug',
  }
]

const client = contentful.createClient({
  space: "8uq0ia8kcaw2",
  accessToken: "omrWh_4jMwzCY9LY05l-CVMIthUAMYUz3dpEG5zAoK4"
});

function generateSitemap() {
  // Dynamically pull slugs from contentful
  let posts = [];
  client.getEntries().then((p) => {
    p.items.map((post) => {
      posts.push(post.fields.slug)
    })
    const config = {
      '/blog/post/:slug': [{
        slug: posts
      }, ],
    };

    return (
      new Sitemap(routes)
      .applyParams(config)
      .build("https://www.editmule.com")
      .save("./bin/etc/production.sitemap.xml")
    );
  });
}

generateSitemap();
