const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  performance: {
    hints: false,
    maxEntrypointSize: 10240000,
    maxAssetSize: 5120000
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
});
