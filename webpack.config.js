'use strict';
var webpack = require('webpack');
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

module.exports = {
//	devtool: 'sourcemap',
	entry: {
           main: "./src/entry.js",
           vendor: ['react','react/addons']
        },
	output: {
		filename: "bundle.js",
		path: __dirname + "/www/assets" ,
		publicPath: "assets/",
                chunkFilename: "[id].[hash].bundle.js"
	},
        node: {
          fs: "empty"
        },
        resolve: {
            extensions: ['','.js','.jsx']
        },
	module: {
	    loaders: [
                  { test:/\.html$/, loader: 'html-loader' },
                  { test:/\.json$/, loader: 'json-loader' },
                  { test: /\.js$/,    loader: "jsx-loader?harmony&sourceMap" },
                  { test: /\.jsx$/,   loader: "jsx-loader?harmony&sourceMap" },
                  { test: /\.(otf|eot|svg|ttf|woff)/, loader: 'url-loader?limit=8192' }
	    ]
	},
	plugins: [
            new webpack.optimize.DedupePlugin(),
            new CommonsChunkPlugin(
                /* chunkName= */"vendor", 
                /* filename= */"vendor.bundle.js"
            ),
	]
};
