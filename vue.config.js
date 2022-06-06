
module.exports = {
	publicPath: process.env.NODE_ENV ==="production"?"/~nayar/":"./"
	,
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