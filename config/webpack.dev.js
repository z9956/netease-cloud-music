const merge = require('webpack-merge');

const common = require('./webpack.common');
const { projectRoot } = require('./config');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    contentBase: projectRoot('dist'),
    hot: true,
    inline: true,
    historyApiFallback: true
  },
});
