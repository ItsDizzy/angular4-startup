var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var baseConfig = require('./webpack.config.base.js');
var path = require('path');

module.exports = webpackMerge(baseConfig, {
    devtool: 'cheap-module-eval-source-map',

    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: 'http://localhost:8080/',
        filename: 'js/[name].js',
        chunkFilename: 'js/[id].chunk.js'
    },

    plugins: [
        new ExtractTextPlugin('css/[name].css')
    ],

    devServer: {
        historyApiFallback: true,
        stats: 'minimal'
    }
});