const AssetsInjectPlugin = require('assets-inject-webpack-plugin');
const NodemonPlugin = require('nodemon-webpack-plugin');
const path = require('path');
const injectOpt = { addPrefix: '/' };
let plugins = [
	new AssetsInjectPlugin('./server/app/views/layout.pug', injectOpt)
];
if (process.env.MODE === 'develop') {
	plugins.push(
		new NodemonPlugin({

			// What to watch.
			watch: path.resolve('./server'),

			// Detailed log.
			verbose: true,

			// Node arguments.
			nodeArgs: ['--inspect=9222'],

			// If using more than one entry, you can specify
			// which output file will be restarted.
			script: './server/index.js'
		})
	);
}
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
	plugins: plugins
};

module.exports = config;
