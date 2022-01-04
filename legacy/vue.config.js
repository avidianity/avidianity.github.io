const path = require('path');

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
	configureWebpack: {
		resolve: {
			alias: {
				'@assets': path.resolve(__dirname, './src/assets'),
				'@components': path.resolve(__dirname, './src/components'),
				'@store': path.resolve(__dirname, './src/store'),
				'@types': path.resolve(__dirname, './src/types'),
				'@views': path.resolve(__dirname, './src/views'),
				'@styles': path.resolve(__dirname, './src/styles'),
				'@src': path.resolve(__dirname, './src'),
			},
		},
	},
	publicPath: process.env.NODE_ENV === 'production' ? 'https://avidianity.github.io' : '/',
};
