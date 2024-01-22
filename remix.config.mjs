import { config } from "@netlify/remix-adapter";

/** @type {import('@remix-run/dev').AppConfig} */
export default {
  ...(process.env.NODE_ENV === "production" ? {
    ...config,
    server: './server.mjs',
  } : undefined),
  serverBuildPath: "./build/index.mjs",
  serverModuleFormat: "esm",
  // This works out of the box with the Netlify adapter, but you can
  // add your own custom config here if you want to.
  //
  // See https://remix.run/file-conventions/remix-config
};
