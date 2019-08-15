const path = require('path');
const resolve = dir => path.join(__dirname, dir);

module.exports = {
	chainWebpack: (config) => {
		config.resolve.alias
		.set('@', resolve('src'))
		.set('@assets',resolve('src/assets'))
		// 这里只写了两个个，你可以自己再加，按这种格式.set('', resolve(''))
	},
	devServer: {
		open: true,   // 是否自动打开浏览器
		inline: true, // 实时刷新
	}

}
