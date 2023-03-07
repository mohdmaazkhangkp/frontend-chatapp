const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://chatappbackend-qp5h.onrender.com",
      changeOrigin: true,
    })
  );
};
