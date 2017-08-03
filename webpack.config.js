var appName = './demo';
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: appName + '/src/main.js',//值可以是字符串、数组或对象
    output: {
        path: path.resolve(__dirname, appName+'/dist'),//Webpack结果存储
        publicPath: 'dist/',//然而“publicPath”项则被许多Webpack的插件用于在生产模式和开发模式下下更新内嵌到css、html，img文件里的url值
        filename: 'build.js'
    },
    module: {
        rules: [
            {test: /\.vue$/,loader: 'vue-loader'},
            {
            	test: /\.(woff|woff2|eot|ttf|svg)(\?.*$|$)/,
            	loader: 'url-loader?importLoaders=1&limit=1000&name=fonts/[name].[ext]'
            },
            {
                test: /\.(png|jpg|gif)(\?.*$|$)/,
                loader: 'url-loader?importLoaders=1&limit=1000&name=images/[name].[ext]'
            },
            { 
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
		            loader: [
		                {
		                    loader: 'css-loader',
		                    query: {
		                        modules: true
		                    }
		                }
		            ]
		        })
            }
        ]
    },
    plugins: [
      new ExtractTextPlugin("./styles.css")
    ]
}

