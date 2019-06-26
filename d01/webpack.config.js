const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpack = require('webpack');

const { CleanWebpackPlugin } = require("clean-webpack-plugin");


module.exports = {
    entry:{
        app:'./src/index.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase:'./dist',
        hot:true,
        port:9000
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: "Output Management"
        })/*,
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()*/
    ],
    output: {
        filename:'[name].bundle.js',
        path:path.resolve(__dirname,'dist'),
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },{
                test:/\.(jpg|gig|png)$/,
                use:['file-loader']
            }
        ]
    }
};