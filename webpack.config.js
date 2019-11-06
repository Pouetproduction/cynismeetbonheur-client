const path = require('path')
const webpack = require('webpack')

module.exports = {

  entry: "./js/app.js",
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  devServer: {
    contentBase: './public'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};

// const path = require('path')
// const webpack = require('webpack')

// module.exports = {
//   entry: './js/app.js',
//   output: {
//     filename: 'bundle.js',
//     path: path.resolve(__dirname, 'public')
//   },
//   devServer: {
//     contentBase: './public'
//   },

// };
