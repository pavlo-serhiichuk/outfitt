const path = require('path')
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: "main.[contenthash:8].js",
    path: path.resolve(__dirname, './dist')
  }
};