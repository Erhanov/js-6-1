'use strict';

const path = require('path');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  mode: 'development',
  watch: true,
  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
        options: {
          'presets': [
            [
              "@babel.preset-env",
              {
                "browsers": ['last 2 versions', 'ie >= 11']
              }
            ]
          ]
        }
      }
    ]
  }
};
