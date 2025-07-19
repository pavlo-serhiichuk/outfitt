import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

import {WebpackOptions} from "./types/webpackTypes";

export const getPlugins = (options: WebpackOptions) => {
  const {paths} = options
  return [
    new HtmlWebpackPlugin({
      template: paths.htmlPath,
    }),
    new MiniCssExtractPlugin({
      filename: 'css/main.[contenthash:10].css', // Output filename for the extracted CSS
    }),
  ]
}