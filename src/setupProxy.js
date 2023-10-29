const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware({
      target: "http://172.28.24.85:8080",
      changeOrigin: true,
    })
  );
};
