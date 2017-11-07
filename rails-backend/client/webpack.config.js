const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');


module.exports = {
  devtool: 'cheap-module-source-map',
  entry: [
    './index.jsx'
  ],
  output: {
    path: path.resolve(__dirname, 'build/'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['es2015', 'stage-0', 'react']
        },
      },
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'build/'),
    port: 8080,
    host: '0.0.0.0',
    proxy: {
      '/api/v1/': 'http://localhost:3000'
    },
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000,
      ignored: /node_modules/
    },
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'index.html'),
      inject: true
    })
  ],
};
