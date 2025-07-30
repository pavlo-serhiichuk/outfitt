import path from 'path'
import {getWebpackConfig} from "./config/webpack/getWebpackConfig";
import {EnvConfiguration, WebpackOptions, WebpackPaths} from "./config/webpack/types/webpackTypes";


export default (env: EnvConfiguration) => {
  const mode = env.mode || 'development'
  const port = env.PORT || 3010
  const isDevMode = mode === 'development'
  const apiUrl = env.apiUrl || 'http://localhost:3010'

  const paths: WebpackPaths = {
    htmlPath: path.resolve(__dirname, 'public', 'index.html'),
    entryPath: path.resolve(__dirname, 'src', 'index.tsx'),
    outputPath: path.resolve(__dirname, 'build'),
    srcPath: path.resolve(__dirname, 'src')
  }

  const options: WebpackOptions  = {
    mode,
    port,
    paths,
    apiUrl,
    isDevMode
  }

  return getWebpackConfig(options)
};