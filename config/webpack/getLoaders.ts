import MiniCssExtractPlugin from "mini-css-extract-plugin";

import {WebpackOptions} from "./types/webpackTypes";

export const getLoaders = (options: WebpackOptions) => {
  const {paths: {srcPath: include}, isDevMode} = options

  const babelLoader = {
    test: /\.(js|ts|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: ['@babel/preset-env']
      }
    }
  }

  const scssLoader = {
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
    babelLoader,
    tsLoader,
  ]
}