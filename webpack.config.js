const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        index: './src/index.js',
        changeBG: './src/changeBgIcon.js',
    },
    output: {
        filename: '[name].js',
        cssFilename: 'style.css',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',         

            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'My App',
            template: 'src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css',
        })
    ]
};