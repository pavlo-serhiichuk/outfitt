import MiniCssExtractPlugin from "mini-css-extract-plugin"
import {WebpackOptions} from "../types/webpackTypes"

export function getCssLoader (options: WebpackOptions) {
  const {isDevMode, paths: {srcPath: include}} = options
  return {
    test: /\.s[ac]ss$/i,
    use: [
      isDevMode ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          esModule: false,
          modules: {
            auto: (resPath: string) => resPath.includes('.module.'),
            localIdentName: isDevMode ? '[local]_[hash:base64:4]' : '[hash:base64:8]',
            exportLocalsConvention: 'camelCase', // optional
          }
        }
      },
      'sass-loader'
    ],
    include,
  }

}