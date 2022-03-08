const path = require('path');
const dotenv = require('dotenv');
dotenv.config();

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: process.env.MODE,
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    clean: true,
    globalObject: 'this',
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        exclude: /node_modules/,
        resolve: {
          extensions: ['.ts', '.tsx', '.js', '.json'],
        },
        use: 'ts-loader',
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  devtool: process.env.MODE === 'development' ? undefined : 'source-map',
  devServer: {
    hot: true,
    historyApiFallback: {
      disableDotRule: true,
    },
    static: './',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Dashboard Bouge',
      template: './src/index.html',
    }),
    new MiniCssExtractPlugin(),
  ],
};
