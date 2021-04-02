const webpack = require('webpack')

module.exports = {
  mode: 'development',
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devtool: 'eval-cheap-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, '..', './dist'),
    open: true,
    historyApiFallback: true,
    hot: true
  }
}
