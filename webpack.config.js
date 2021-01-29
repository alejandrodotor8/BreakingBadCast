const path = require('path');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const MediaQueryPlugin = require('media-query-plugin');
const webpack = require('webpack');

module.exports = {
	entry: {
		main: path.resolve(__dirname, 'src/index.js'),
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js',
	},
	devServer: {
		port: 8080,
		contentBase: path.resolve(__dirname, 'dist'),
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: 'babel-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.scss$/,
				use: [
					MiniCSSExtractPlugin.loader,
					'css-loader',
					// MediaQueryPlugin.loader,
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
			template: path.resolve(__dirname, 'public/index.html'),
			filename: './index.html',
			scriptLoading: 'defer',
		}),
		new MiniCSSExtractPlugin({
			filename: 'styles/[name].css',
		}),
		new CopyWebpackPlugin({
			patterns: [{ from: 'src/utils', to: 'utils' }],
		}),
		/* new MediaQueryPlugin({
			include: ['styles'],
			queries: {
				'print, screen and (min-width: 600px)': 'desktop',
			},
		}), */
	],
	optimization: {
		splitChunks: {
			chunks: 'all',
			minSize: 0,
			name: 'commons',
		},
	},
};
