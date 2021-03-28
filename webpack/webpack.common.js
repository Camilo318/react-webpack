const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const Dotenv = require('dotenv-webpack')

module.exports = {
  entry: path.resolve(__dirname, '..', './src/index.js'),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: path.resolve(__dirname, '..', './dist'),
    filename: 'bundle.js'
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', './public/index.html'),
      inject: true
    }),
    new Dotenv({
      path: path.resolve(__dirname, '..', './.env')
    })
  ],
  devServer: {
    contentBase: path.resolve(__dirname, '..', './dist'),
    open: true,
    historyApiFallback: true,
    hot: true
  }
}
