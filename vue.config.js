module.exports = {
	publicPath: './',
	devServer: {
		proxy: {
			  '/api/*':{
				  target:'https://cave.cs.columbia.edu/',
				  changeOrigin:true,
				  pathRewrite:{'^/api' : ''},
				  logLevel: "debug",
				  }
	}
	}
}