const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
  filename: '../public/build/[name].css'
});

module.exports = {
    devtool: 'inline-source-map',
    entry: {
      app: [
        'babel-polyfill',
        path.join(__dirname, './src/client/entry')
      ]
    },
    output: {
        path: __dirname + '/public',
        filename: "build/[name].js",
        publicPath: 'http://localhost:8082/build/'
    },
    resolve: {
      extensions: ['.js', '.jsx', '.scss']
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          loaders: ['babel-loader'],
          exclude: /node_modules/
        },
        {
          test: /\.css$|\.scss$/,
          loader: extractSass.extract({
            fallback: "style-loader",
            use: [
              { loader: 'css-loader' },
              { loader: 'postcss-loader' },
              { loader: 'sass-loader', options: {} }
            ]
          })
        }
      ]
    },
    plugins: [
      extractSass
    ]
};
