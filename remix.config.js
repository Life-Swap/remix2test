const { config } = require("@netlify/remix-adapter");

/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ...(process.env.NODE_ENV === "production" ? {
    ...config,
    // same as config config.serverBuildPath but with a .js extension in stead of .mjs
    serverBuildPath: './.netlify/functions-internal/server.mjs',
  } : undefined),

  serverModuleFormat: "cjs",
  // This works out of the box with the Netlify adapter, but you can
  // add your own custom config here if you want to.
  //
  // See https://remix.run/file-conventions/remix-config
};
