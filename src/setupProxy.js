const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware({
      target: "YOUR_PORT",
      changeOrigin: true,
    })
  );
};
