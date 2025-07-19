export type BuildMode = 'production' | 'development'

export interface EnvConfiguration {
  mode: BuildMode,
  PORT: number
}

export interface WebpackPaths {
  htmlPath: string
  entryPath: string
  outputPath: string
  srcPath: string
}

export interface WebpackOptions {
  mode: BuildMode
  port: number
  paths: WebpackPaths
  isDevMode: boolean
}