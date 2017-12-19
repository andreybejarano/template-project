const AssetsInjectPlugin = require('assets-inject-webpack-plugin');
const injectOpt = { addPrefix: '/' };
const config = {
	entry: {
		client: ['./client/app.jsx']
	},
	output: {
		filename: 'build/app.js'
	},
	module: {
		loaders: [
			{
				test: /\.json$/,
				loader: 'json'
			},
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['es2016', 'es2017', 'react']
				}
			}
		]
	},
	resolve: {
		extensions: ['.js', '.jsx', '.css', '.json', '.pug']
	},
	plugins: [
		new AssetsInjectPlugin('./server/app/views/layout.pug', injectOpt)
	]
};

module.exports = config;
