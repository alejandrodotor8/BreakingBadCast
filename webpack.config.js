const path = require('path');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
	entry: {
		app: path.resolve(__dirname, 'src/index.js'),
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js',
	},
	devServer: {
		port: 8080,
		contentBase: path.resolve(__dirname, 'dist'),
		// open: true,
		// hot: true,
	},
	module: {
		rules: [
			{
				test: /\.pug$/,
				use: 'pug-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.js$/, // Any file that end with .js
				use: 'babel-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.scss$/, // Any file that end with .scss
				use: [
					// Creates `style` nodes from JS strings
					// 'style-loader',
					{
						loader: MiniCSSExtractPlugin.loader,
					},
					// Translates CSS into CommonJS
					'css-loader',
					// Compiles Sass to CSS
					'sass-loader',
				],
			},
			{
				test: /\.jpg|png|gif|woff|eot|ttf|svg|mp4$/,
				use: {
					loader: 'url-loader',
					options: {
						limit: 90000,
					},
				},
			},
			{
				test: /\.(jpg|png|gif|woff|eot|ttf|svg|mp4)$/i,
				loader: 'file-loader',
			},
		],
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			title: 'Plugins',
			template: path.resolve(__dirname, 'src/index.pug'),
		}),
		new MiniCSSExtractPlugin({
			filename: 'styles/[name].css',
		}),
		new CopyWebpackPlugin({
			patterns: [{ from: 'src/assets', to: 'assets' }],
		}),
	],
	optimization: {
		splitChunks: {
			chunks: 'all',
			minSize: 0,
			name: 'commons',
		},
	},
};
