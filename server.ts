const build = require("@remix-run/dev/server-build");
const { createRequestHandler } = require("@netlify/remix-adapter");

const handler = createRequestHandler({
  build,
  mode: process.env.NODE_ENV,
});

export default handler;

export const config = { path: "/*", preferStatic: true }
