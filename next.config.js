const { withContentlayer } = require("next-contentlayer");

const nextConfig = withContentlayer({
  reactStrictMode: true,
});

module.exports = nextConfig;
