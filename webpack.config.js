// this will build and serve the examples

var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    app: './src/index.js'
  },
  debug: true,
  devtool: 'inline-source-map',
  output: {
    path: path.join(__dirname, 'examples'),
    filename: '[name].bundle.js',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      'react-bootstrap-table': path.resolve(__dirname, './src')
    }
  },
  externals: {
    react: 'React',
    'react-dom' : 'ReactDOM'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      }, {
        test: /\.css$/, loader: 'style-loader!css-loader'
      }
    ]
  },

  plugins: [

  ]
};
