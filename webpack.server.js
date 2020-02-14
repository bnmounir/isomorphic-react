const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const webpackNodeExternals = require('webpack-node-externals');

const serverConfig = {
    // tell webpack building bundle for node rather than browser
    target: 'node',
    // entry file for webpack
    entry: './src/index.js',
    // output the generated bundle
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    externals: [webpackNodeExternals()]
};

module.exports = merge(baseConfig, serverConfig);
