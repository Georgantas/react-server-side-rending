
const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const webpackNodeExternals = require('webpack-node-externals'); // used to prevent webpack from bundling all the modules into bundle.js

const config = {
    // Inform webpack that we're building a bundle
    // for nodeJs, rather than for the browser
    target: 'node',

    // Tell webpack the root file of our server application
    entry: './src/index.js',

    // Tell webpack where to put the output file that is generated
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },

    externals: [webpackNodeExternals()] // used to prevent webpack from bundling all the modules into bundle.js
};

module.exports = merge(baseConfig, config);
