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
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
