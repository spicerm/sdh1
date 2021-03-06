// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.

module.exports = {
  plugins: [
    // your custom plugins
  ],
  module: {
    rules: [
      // add your custom rules.
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use:[
          {
            loader: 'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
          },
          {
            loader: 'file-loader?hash=sha512&digest=hex&name=[hash].[ext]'
          }
        ],
      },
      // {
      //   test: /\.woff2?(\?v=\d+\.\d+\.\d+)?$/,
      //   use: {
      //     loader: "url-loader",
      //     options: {
      //       limit: 50000,
      //       mimetype: "application/font-woff",
      //     },
      //   },
      // },
    ],
  },
};
