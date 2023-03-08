module.exports = ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET", "i2s+jiSG7GhBqA0seNqKNg=="),
  },
  apiToken: {
    salt: env("API_TOKEN_SALT", "ZeqDzdClTXJwqom2j5SI3Q=="),
  },
  transfer: {
    token: {
      salt: env("TRANSFER_TOKEN_SALT", "XdL3r3dkdO9p160RFkZXKg=="),
    },
  },
});
