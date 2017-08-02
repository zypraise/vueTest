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
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                    }
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.((woff2?|svg)(\?v=[0-9]\.[0-9]\.[0-9]))|(woff2?|svg|jpe?g|png|gif|ico)$/,
                loader: 'url-loader?importLoaders=1&limit=100&name=[name].[ext]'
            },
            { 
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                  fallback: "style-loader",
                  use: "css-loader"
                })
            }
        ]
    },
    plugins: [
      new ExtractTextPlugin("./styles.css")
    ],
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    devServer: {//webpack-dev-server配置
        historyApiFallback: true,//不跳转
        noInfo: true,
        inline: true//实时刷新
    }
}

