const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {
  // console.log('mode: ', env.mode)
  return {
    mode: 'development',
    entry: {
      index: './src/index.js',
    },
    output: {
      filename: 'main.[contenthash:10].js',
      path: path.resolve(__dirname, './dist'),
      clean: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public', 'index.html'),
      }),
      new MiniCssExtractPlugin({
        filename: 'main.[contenthash:10].css', // Output filename for the extracted CSS
      }),
    ],
    devtool: 'inline-source-map',
    devServer: {
      hot: true,
      port: 3010,
      open: true,
      historyApiFallback: true,
    },
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [env.mode === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'fonts/[name][ext]', // <-- this moves them to "dist/fonts/"
          },
        },
      ],
    },
  }
};