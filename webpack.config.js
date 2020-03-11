/*
 * @Description: webpack配置文件
 * @Author: 郭军伟
 * @Date: 2020-03-09 09:46:45
 * @lastEditTime: Do not edit
 */
const path = require('path');
const devServer = require('./config/devServer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';

const webpackConfig = {
  mode: isDev ? 'development' : 'production',
  devtool: isDev ? "cheap-module-eval-source-map" : "none",
  entry: './src/layout/index.jsx',
  devServer: devServer,
  watch: true,
  output: {
    filename: '[name].[hash:8].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: ''
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, 'src'),
        use: 'babel-loader'
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: [
          "style-loader",
          "css-loader",
          "postcss-loader",
          "less-loader"
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './public/index.html'
    }),
    new CleanWebpackPlugin()
  ]
}

module.exports = webpackConfig;