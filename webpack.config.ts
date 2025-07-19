import path  from 'path'
import HtmlWebpackPlugin  from 'html-webpack-plugin'
import MiniCssExtractPlugin  from 'mini-css-extract-plugin'

type BuildMode = 'production' | 'development'

interface EnvConfiguration {
  mode: BuildMode,
  port: number
}

module.exports = (env: EnvConfiguration) => {
  return {
    mode: 'development',
    entry: {
      index: './src/index.ts',
    },
    output: {
      filename: 'main.[contenthash:10].js',
      path: path.resolve(__dirname, './dist'),
      clean: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public', 'index.html'),
      }),
      new MiniCssExtractPlugin({
        filename: 'main.[contenthash:10].css', // Output filename for the extracted CSS
      }),
    ],
    devtool: 'inline-source-map',
    devServer: {
      hot: true,
      port: 3010,
      open: true,
      historyApiFallback: true,
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [env.mode === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
          include: path.resolve(__dirname, 'src'),
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
          include: path.resolve(__dirname, 'src'),
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'fonts/[name][ext]', // <-- this moves them to "dist/fonts/"
          },
          include: path.resolve(__dirname, 'src'),
        },
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
  }
};