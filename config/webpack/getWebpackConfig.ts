import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {getPlugins} from "./getPlugins";
import {getLoaders} from "./getLoaders";
import {WebpackOptions} from "./types/webpackTypes";

export function getWebpackConfig(options: WebpackOptions) {
  const {mode, port, paths} = options
  return {
    mode,
    entry: {
      index: paths.entryPath,
    },
    output: {
      filename: 'main.[contenthash:10].js',
      path: paths.outputPath,
      clean: true,
    },
    plugins: getPlugins(options),
    module: {
      rules: getLoaders(options)
    },
    devtool: 'inline-source-map',
    devServer: {
      port,
      hot: true,
      open: true,
      historyApiFallback: true,
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
      alias: {
        '@': path.resolve(__dirname, '..', '..', 'src')
      },
    },
  }
}