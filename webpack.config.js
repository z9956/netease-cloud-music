const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //生成html模板
const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin; //清除打包文件
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //提取生产css
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin'); //压缩代码

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  //开发模式
  mode: 'development', //production环境自动压缩代码
  //入口
  entry: {
    app: './src/index.tsx'
  },
  //启用源映射
  devtool: 'source-map',
  //开发服务器相关配置
  devServer: {
    contentBase: './public', //开发服务器内容的基本路径
    hot: true, //模块热更新 HotModuleReplacementPlugin,
    inline: true,
    historyApiFallback:true
  },
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src')
    },
    extensions: ['.tsx', '.ts', '.js', '.json']
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            outputPath: 'images/'
          }
        }
      },
      {
        test: /\.s[ac]ss$/,
        //生产环境抽离css
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ]
      },
      {
        test: /\.(tsx|ts)?$/,
        loader: 'ts-loader'
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader'
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: './css/[name][hash:7]index.css',
      chunkFilename: '[id].css'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: '网易云音乐',
      template: './public/index.html'
    })
  ],
  //输出
  output: {
    filename: 'js/[name][hash].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};