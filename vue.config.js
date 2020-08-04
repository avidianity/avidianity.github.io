const path = require('path');

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
			},
		},
	},
};
