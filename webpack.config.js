var path = require('path');//path setup
var HtmlWebpackPlugin = require('html-webpack-plugin');//create index html and put in dist

module.exports = {
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader' },//loder for babel env and script package
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ]}//makes require index.css valid
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.html'// get the index html
    })
  ]
};