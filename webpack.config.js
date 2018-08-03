module.exports = {
	entry: './blocks/mobile-story/block.js',
	output: {
		path: __dirname + '/blocks/mobile-story/',
		filename: 'block.build.js',
	},
	module: {
		loaders: [
			{
				test: /.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
			},
		],
	},
};