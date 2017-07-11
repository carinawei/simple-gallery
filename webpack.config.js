var htmlWebpackPlugin = require('html-webpack-plugin'),
    cleanWebpackPlugin = require('clean-webpack-plugin'),
    path = require('path');

module.exports = {
  entry: './app/index.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(jpg|png|gif)$/i,
        exclude: /node_modules/,
        use: {
          loader: 'file-loader',
          query: {
            name: 'images/[hash]-[name].[ext]'
          }
        }
      },
      {
        test: /\.tpl$/,
        exclude: /node_modules/,
        use: [
          'jade-loader'
        ]
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'transformed.js',
  },
  plugins: [
    new htmlWebpackPlugin({
      title: 'Hello world',
      favicon: 'app/favicon.jpg',
      filename: 'index.html',
      template: 'app/index.tpl',
      inject: 'body',
      cache: false
    }),
    new cleanWebpackPlugin('build', {
      root: __dirname,
      verbose: true,
      dry: false,
      watch: false
    })
  ]
}
