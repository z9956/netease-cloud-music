const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const { projectRoot } = require('./config');
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: {
    app: projectRoot('./src/index.tsx'),
  },
  resolve: {
    alias: {
      '@': projectRoot('src'),
    },
    extensions: ['.tsx', '.ts', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      // {
      //   enforce: 'pre',
      //   test: /\.(js|jsx|ts|tsx)$/,
      //   exclude: /node_modules/,
      //   loader: 'eslint-loader',
      //   options: {
      //     emitWarning: true,
      //     emitError: true,
      //     fix: true,
      //   },
      // },
      {
        test: /\.(png|jpg|gif|eot|svg|ttf|woff|woff2|json)$/,
        use: {
          loader: 'file-loader',
          options: {
            outputPath: 'assets/'
          },
        },
      },
      {
        test: /\.(png|jpg)$/,
        loader: "url-loader"
      },
      {
        test: /\.s?css$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              url: true
            }
          },
          'resolve-url-loader',
          'sass-loader?sourceMap'
        ],
      },
      {
        test: /\.(tsx|ts)?$/,
        loader: 'ts-loader',
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: './css/[name][hash:7].css',
      chunkFilename: '[id].css',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: '仅供练习',
      template: projectRoot('/public/index.html'),
      favicon: projectRoot('/src/static/images/favicon.ico')
      // chunks: ['index'],
      // minify: {
      //   removeComments: true,
      //   minifyJS: true,
      //   minifyCSS: true,
      //   minifyURLs: true
      // }
    }),
  ],
  output: {
    filename: 'js/[name][hash].bundle.js',
    path: projectRoot('dist')
  },
};
