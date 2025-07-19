import MiniCssExtractPlugin from "mini-css-extract-plugin";
import path from "path";

import {WebpackOptions} from "./types/webpackTypes";

export const getLoaders = (options: WebpackOptions) => {
  const {mode, paths: {srcPath: include}, isDevMode} = options

  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [isDevMode ? 'style-loader' : MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
    include,
  }
  const imageLoader = {
    test: /\.(png|svg|jpg|jpeg|gif)$/i,
    type: 'asset/resource',
    include,
  }
  const fontsLoader = {
    test: /\.(woff|woff2|eot|ttf|otf)$/i,
    type: 'asset/resource',
    generator: {
      filename: 'fonts/[name][ext]', // <-- this moves them to "dist/fonts/"
    },
    include,
  }

  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
    include
  }

  return [
    scssLoader,
    imageLoader,
    fontsLoader,
    tsLoader,
  ]
}