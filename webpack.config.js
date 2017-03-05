const path = require('path');

module.exports = {
  devtool: 'eval',
  entry: [
    'babel-polyfill',
    path.join(__dirname, 'app', 'index.js')
  ],
  output: {
    path: path.join(__dirname, 'public', 'build'),
    filename: 'bundle.js'
  },
  resolveLoader: {
    modules: [path.resolve(__dirname, 'node_modules'),]
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      'vue$': 'vue/dist/vue.js'
    },
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/, 
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.less$/, 
        loader: 'style-loader!css-loader!less-loader'
      },
      {
        test: /\.(png|jpg|gif|svg|ico)$/,
        loader: 'file-loader'
      }
    ]
  }
}