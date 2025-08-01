import {Configuration as WebpackConfiguration, DefinePlugin} from "webpack"
import {WebpackOptions, WebpackPaths} from "../webpack/types/webpackTypes"
import {getCssLoader} from "../webpack/loaders/getCssLoader"
import path from "path"

export const getWebpackFinal = async (config: WebpackConfiguration) => {
  const paths: WebpackPaths = {
    outputPath: '',
    htmlPath: '',
    entryPath: '',
    srcPath: path.resolve(__dirname, '..', '..', 'src'),
  }
  config.resolve?.modules?.push(paths.srcPath, 'node_modules')
  config.resolve?.extensions?.push('.ts', '.tsx')
  config.module?.rules?.push(getCssLoader({isDevMode: true, paths} as WebpackOptions))
  config!.resolve!.alias = {
    ...config!.resolve!.alias,
    '@': path.resolve(__dirname, '..', '..', 'src'),
  }
  const fileLoaderRule: any = config.module?.rules?.find((rule: any) => {
    if (rule.test) {
      return rule.test?.test('.svg')
    }
    return null
  })
  fileLoaderRule.exclude = /\.svg$/
  config.module?.rules?.push({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  })

  config.plugins?.push(
    new DefinePlugin({
      __IS_DEV__: JSON.stringify(true),
      __API_URL__: JSON.stringify('https://test-api.ua'),
      __PROJECT__: JSON.stringify('storybook'),
    }),
  )

  return config
}