const path = require("path");

function resolve(dir) {
	return path.join(__dirname, "..", dir);
}

module.exports = {
	context: resolve("./"),
	entry: {
    '{{ componentName }}': resolve('./src/index.js')
	},
	output: {
    path: resolve("dist"),
    library: '{{ libraryName }}',
    libraryExport: 'default',
		libraryTarget: 'var'
  },
  resolve: {
    extensions: ['.js', '.vue']
  },
	module: {
    rules: [
      {{#lint}}
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [resolve('src')],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {{/lint}}
			{
				test: /\.js$/,
				loader: "babel-loader",
				include: [resolve("src")]
			},
			{
				test: /\.vue$/,
				loader: "vue-loader",
				include: [resolve("src")]
			}
		]
	}
};
