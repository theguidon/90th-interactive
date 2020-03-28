const ImageminPlugin = require("imagemin-webpack-plugin").default;

module.exports = {
  chainWebpack: config => {
    config.module
      .rule("images")
      .use("url-loader")
      .loader("url-loader")
      .tap(options => Object.assign(options, { limit: 8000 }));
  },
  configureWebpack: {
    devtool: "source-map",
    plugins: [
      new ImageminPlugin({
        pngquant: {
          quality: "90-95"
        }
      })
    ]
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/styles/_variables.scss";`
      }
    }
  },
  devServer: {
    disableHostCheck: true,
    port: 9000,
    public: "0.0.0.0:9000"
  },
  publicPath: "./"
};
