'use strict';

const path = require('path');
const webpack = require('webpack');

const clientConfig = {
    entry: path.resolve(__dirname, 'src/index'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        libraryTarget: 'jsonp',//注意打包为jsonp回调
        library: 'registerLibrary'//注意使用此特定名称
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'es2015', 'react', 'stage-0']
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.json', '.jsx']
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {NODE_ENV: JSON.stringify('production')}
        }),
        //不需要混淆
        //     new webpack.optimize.UglifyJsPlugin({
        //         uglifyOptions: {
        //             ecma: 8,
        //             compress: {
        //                 comparisons: false
        //             },
        //             output: {
        //                 ascii_only: true
        //             },
        //             warnings: true
        //         }
        //     })
    ]
};

module.exports = clientConfig;
