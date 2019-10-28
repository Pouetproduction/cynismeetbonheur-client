var path = require("path");

module.exports = {

  entry: "./src/app.js",
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
  },
  output : {
    path: path.resolve(__dirname, 'dist/'),
    filename: 'main.js',
    libraryTarget: 'var',
    library: 'EntryPoint'
  }
};
