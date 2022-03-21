const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware({
      target: "https://knitresult.herokuapp.com",
      changeOrigin: true,
    })
  );
};