// webpack.config.js
module.exports = {
    // your existing configuration
    resolve: {
      fallback: {
        crypto: require.resolve('crypto-browserify')
      }
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_OPTIONS': JSON.stringify('--openssl-legacy-provider')
      })
    ]
  };