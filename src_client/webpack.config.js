/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const WebpackObfuscator = require('webpack-obfuscator');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
	target: 'node',
	mode: isProduction ? 'production' : 'development',
	entry: './src/index',
	output: {
		path: path.resolve(__dirname, '../client_packages'),
		filename: 'index.js'
	},
	resolve: {
		extensions: ['*', '.ts', '.tsx', '.js', '.json'],
		plugins: [new TsconfigPathsPlugin()]
	},
	plugins: [
		new CleanWebpackPlugin({
			cleanOnceBeforeBuildPatterns: ["index.js"],
		}),
		isProduction
			? new WebpackObfuscator(
					{
						rotateStringArray: true
					},
					['excluded_bundle_name.js']
			  )
			: new webpack.DefinePlugin({})
	],
	module: {
		rules: [
			{
				test: /\.(tsx?|js)$/,
				loader: 'babel-loader',
				exclude: /(node_modules)/,
				options: {
					cacheDirectory: true,
					plugins: [
						'@babel/plugin-proposal-class-properties',
						'@babel/plugin-transform-runtime'
					],
					presets: [
						'@babel/preset-typescript',
						[
							'@babel/preset-env',
							{
								targets: {
									node: 'current'
								}
							}
						]
					]
				}
			}
		]
	},
	optimization: {
		minimize: isProduction,
		minimizer: [
			new TerserPlugin({
				terserOptions: {
					parse: {
						ecma: 8
					},
					compress: {
						ecma: 6,
						warnings: false,
						comparisons: false,
						inline: 2
					},
					output: {
						ecma: 6,
						comments: false,
						// Turned on because emoji and regex is not minified properly using default
						// https://github.com/facebook/create-react-app/issues/2488
						ascii_only: true
					}
				},
				parallel: true,
				extractComments: false
			})
		]
	}
};
