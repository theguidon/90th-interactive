// const ImageminPlugin = require("imagemin-webpack");

module.exports = {
  chainWebpack: config => {
    config.module
      .rule("images")
      .use("url-loader")
      .loader("url-loader")
      .tap(options => Object.assign(options, { limit: 8000 }));
  },
  //   configureWebpack: {
  //     module: {
  //       rules: [
  //         {
  //           test: /\.(jpe?g|png|gif|svg)$/i,
  //           use: [
  //             {
  //               loader: "file-loader",
  //               options: {
  //                 esModule: false
  //               }
  //             }
  //           ]
  //         }
  //       ]
  //     }
  //   plugins: [
  //     new ImageminPlugin({
  //       bail: false,
  //       cache: true,
  //       imageminOptions: {
  //         plugins: [
  //           ["gifsicle", { interlaced: true }],
  //           ["jpegtran", { progressive: true }],
  //           ["optipng", { optimizationLevel: 5 }],
  //           [
  //             "svgo",
  //             {
  //               plugins: [
  //                 {
  //                   removeViewBox: false
  //                 }
  //               ]
  //             }
  //           ]
  //         ]
  //       }
  //     })
  //   ]
  //   },
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
