module.exports = ({ env }) => ({
  "vercel-deploy": {
    enabled: true,
    config: {
      deployHook:
        "https://api.vercel.com/v1/integrations/deploy/prj_bGWnDhsECZtVwKLLgi96P29qbbKu/Br7UK7YMQw",
      apiToken: "dGDbPALg7bT5jJtr7ntu3nLM",
      appFilter: "joyas-valencia-server",
      teamFilter: "",
      roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
    },
  },
});
