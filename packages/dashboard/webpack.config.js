const path = require('path')

const HtmlPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js'
  },
  plugins: [
    new HtmlPlugin({
      title: 'Dashboard',
      template: 'src/index.html',
      scriptLoading: 'defer'
    })
  ],
  devServer: {
    host: process.env.npm_package_config_dev_host,
    public: process.env.npm_package_config_dev_public
  }
}
