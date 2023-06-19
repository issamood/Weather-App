const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader','css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
    entry: './src/index.js',
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Weather-App'
        })
    ],
    output:{
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    devServer: {
        static: '/dist',
    },
    optimization: {
        runtimeChunk:'single',
    },
    mode: 'development',
    devtool: 'inline-source-map',
}