const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require("./webpack.common");


module.exports = merge(common,{
    devServer: {
        contentBase:'./dist'
    },
    plugins:[
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ]

});
