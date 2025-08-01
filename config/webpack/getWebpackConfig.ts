import path from "path"
import {getPlugins} from "./getPlugins"
import {getLoaders} from "./getLoaders"
import {WebpackOptions} from "./types/webpackTypes"

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
      publicPath: '/'
    },
    plugins: getPlugins(options),
    module: {
      rules: getLoaders(options)
    },
    devtool: 'inline-source-map',
    devServer: {
      port,
      hot: true,
      open: false,
      historyApiFallback: true,
      proxy: [
        {
          context: ['/api'],
          target: 'http://localhost:8080',
          pathRewrite: { '^/api': '' },
          changeOrigin: true,
          secure: false,
        },
      ]
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
      alias: {
        '@': path.resolve(__dirname, '..', '..', 'src')
      },
    },
  }
}