const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// webpack.config.js
module.exports = {
  mode: 'production',
  entry: {
    app: './src/main.js'
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name][hash].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: ['file-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin(), new CleanWebpackPlugin(), new MiniCssExtractPlugin()],
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: 'vendors'
    }
  }
};
