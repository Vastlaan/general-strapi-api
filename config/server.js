module.exports = ({ env }) => {
  if (env("NODE_ENV") === "production") {
    return {
      host: env("HOST", "0.0.0.0"),
      port: env.int("PORT"),
      admin: {
        auth: {
          secret: env("ADMIN_JWT_SECRET"),
        },
      },
      url: "https://api.itcontext.nl",
    };
  } else {
    return {
      host: env("HOST", "0.0.0.0"),
      port: env.int("PORT"),
      admin: {
        auth: {
          secret: env("ADMIN_JWT_SECRET"),
        },
      },
    };
  }
};
