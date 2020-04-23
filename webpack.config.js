const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 生成html模板
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // 清除打包文件
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // 提取生产css

const devMode = process.env.NODE_ENV !== 'production';
let mode = 'development'
module.exports = {
  // 开发模式
  mode: 'development', // production环境自动压缩代码
  // 入口
  entry: {
    app: './src/index.tsx',
  },
  // 启用源映射
  devtool: 'source-map',
  // 开发服务器相关配置
  devServer: {
    contentBase: './public', // 开发服务器内容的基本路径
    hot: true, // 模块热更新 HotModuleReplacementPlugin,
    inline: true,
    historyApiFallback: true,
  },
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src'),
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
          'css-loader',
          'resolve-url-loader',
          'sass-loader'
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
      template: './public/index.html',
      favicon: './src/static/images/favicon.ico'
    }),
  ],
  // 输出
  output: {
    filename: 'js/[name][hash].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
};
