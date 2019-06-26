const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'webpack-numbers.js',
        libraryTarget: 'umd',
        globalObject: 'this',
        // libraryExport: 'default',
        library: 'webpackNumbers'
    },
    externals:{
        lodash:{
            commandjs:'lodash',
            commandjs2:'lodash',
            amd:'lodash',
            root:'_'
        }
    }
}