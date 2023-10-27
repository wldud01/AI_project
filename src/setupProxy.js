const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware({
      target: "http://YOUR_IP:8080",
      changeOrigin: true,
    })
  );
};
