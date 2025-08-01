import HtmlWebpackPlugin from "html-webpack-plugin"
import MiniCssExtractPlugin from "mini-css-extract-plugin"
import {WebpackOptions} from "./types/webpackTypes"
import webpack from "webpack"

export const getPlugins = (options: WebpackOptions) => {
  const {paths, apiUrl, isDevMode} = options
  return [
    new HtmlWebpackPlugin({
      template: paths.htmlPath,
    }),
    new MiniCssExtractPlugin({
      filename: 'css/main.[contenthash:10].css', // Output filename for the extracted CSS
    }),
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDevMode),
      __API_URL__: JSON.stringify(apiUrl)
    })
  ]
}