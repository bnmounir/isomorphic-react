const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');

const clientConfig = {
    // entry file for webpack
    entry: './src/client/index.js',
    // output the generated bundle
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    }
    // tell webpack to run babel on every file it runs through
};

module.exports = merge(baseConfig, clientConfig);
