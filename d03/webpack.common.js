const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const { CleanWebpackPlugin } = require("clean-webpack-plugin");


module.exports = {
    entry:{
        app:'./src/index.js',
        another:'./src/another-module.js'
    },
    output: {
        filename:'[name].[chunkhash].bundle.js',
        path:path.resolve(__dirname,'dist'),
        publicPath: '/'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: "Output Management"
        })/*,
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()*/
    ],
    optimization:{
        splitChunks:{
            chunks:'initial'
        }
    }
};