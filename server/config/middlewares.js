module.exports = [
  "strapi::errors",
  "strapi::security",
  // {
  //   name: "strapi::security",
  //   config: {
  //     contentSecurityPolicy: {
  //       userDefaults: true,
  //       directives: {
  //         "connect-src": ["'self'", "https"],
  //         "img-src": ["'self'", "data:", "blob:", "https://res.cloudinary.com"],
  //         "media-src": ["'self'", "data:", "blob:"],
  //         upgradeInsecure: null,

  //       },
  //     },
  //   },
  // },
  {
    name: "strapi::cors",
    config: {
      enabled: true,
      headers: "*",
      origin: [
        "http://localhost:1337",
        "http://localhost:3000",
        "https://lobster-app-ctpxl.ondigitalocean.app",
        "https://strapi-app-2qbph.ondigitalocean.app",
      ],

      methods: ["GET", "POST", "PUT", "DELETE"],
      credentials: true,
    },
  },
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
