const path = require('path');

module.exports = {
	entry: './js/app.js',
	output: {
		filename: 'app.js',
		path: path.resolve(__dirname, 'public')
	},
	devServer: {
		contentBase: './public'
  },
  devtool: "source-map",
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			}
		]
  }
};
