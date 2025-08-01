import {WebpackOptions} from "./types/webpackTypes"
import {getCssLoader} from "./loaders/getCssLoader"

export const getLoaders = (options: WebpackOptions) => {
  const {paths: {srcPath: include}} = options

  const svgLoader = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: [{
      loader: '@svgr/webpack',
      options: {
        icon: true,
        svgoConfig: {
          plugins: [{
            name: 'convertColors',
            params: {
              currentColor: true
            }
          }]
        }
      }
    }],
  }
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
  const scssLoader = getCssLoader(options)
  const imageLoader = {
    test: /\.(png|jpg|jpeg|gif)$/i,
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
    svgLoader,
    scssLoader,
    imageLoader,
    fontsLoader,
    babelLoader,
    tsLoader,
  ]
}