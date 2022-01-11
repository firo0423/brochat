module.exports = {
  lintOnSave: false,

  /* 开启代理服务器 */
  devServer: {
    proxy: {
      "/socket": {
        target: "http://101.43.152.94:4000",
        pathRewrite: {
          "^/socket": "",
        },
        ws: true,
        changeOrigin: true,
      },
    },
  },
};
