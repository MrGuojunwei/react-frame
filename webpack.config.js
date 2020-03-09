/*
 * @Description: webpack配置文件
 * @Author: 郭军伟
 * @Date: 2020-03-09 09:46:45
 * @lastEditTime: Do not edit
 */
import path from 'path';

const webpackConfig = {
  mode: 'development',
  entry: './src/index.js',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src');
    }
  },
  modules: {

  },
  plugins: []
}