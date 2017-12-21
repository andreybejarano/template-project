const AssetsInjectPlugin = require('assets-inject-webpack-plugin');
const NodemonPlugin = require('nodemon-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const injectOpt = { addPrefix: '/' };
let plugins = [
	new AssetsInjectPlugin('./server/app/views/layout.pug', injectOpt),
	new ExtractTextPlugin({
		filename: 'build/[name].css',
		allChunks: true
	})
];
if (process.env.MODE === 'develop') {
	plugins.push(
		new NodemonPlugin({
			watch: path.resolve('./server'),
			verbose: true,
			nodeArgs: ['--inspect=9222'],
			script: './server/index.js'
		})
	);
}
const config = {
	entry: {
		client: ['./client/app.jsx'],
		client_libs: ['./client/css/vendors/index.css']
	},
	output: {
		filename: 'build/[name].js'
	},
	module: {
		loaders: [
			{
				test: /\.json$/,
				loader: 'json'
			}
		],
		rules: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				options: {
					presets: ['es2016', 'es2017', 'react']
				}
			},
			// Rules for Style Sheets
			{
				test: /\.css/,
				rules: [
					// Process external/third-party styles
					{
						include: path.resolve(__dirname, '../client/css/vendor'),
						use: ExtractTextPlugin.extract({
							fallback: 'style-loader',
							use: [
								{
									loader: 'css-loader',
									options: {
										sourceMap: true,
										minimize: false
									}
								}
							]
						})
					}
				]
			}
		]
	},
	resolve: {
		extensions: ['.js', '.jsx', '.css', '.json', '.pug']
	},
	plugins: plugins
};

module.exports = config;
