const HtmlWebPackPlugin     = require('html-webpack-plugin');
const MinicssExtractPlugin  = require("mini-css-extract-plugin");
const CopyPlugin            = require("copy-webpack-plugin");

const CssMinimizer = require('css-minimizer-webpack-plugin');
const Terser       = require('terser-webpack-plugin');


module.exports = {
    mode: 'production',

    output: {
        clean: true, //limpia los html
        filename: 'main.[contenthash].js'
    },

    module: {
        rules: [
            {
                test: /\.css$/,// busca cualquier archivo css hace el requermientos
                exclude: /styles\.css$/i,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /styles\.css$/,//Busca y evalua
                use: [ MinicssExtractPlugin.loader, 'css-loader' ]
            },
            {
                test: /\.html$/i,// busca a cualquier archivo html hace el requerimiento
                loader: 'html-loader',
                options: {
                    minimize: false,
                    sources: false,
                }
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
            }           
        ]
    },
    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizer(),
            new Terser()
        ]
    },


    plugins: [
       new HtmlWebPackPlugin({ // instancia el htmlwebpack y modifica al main
            title: 'Mi Webpack app',
            // filename: 'index.html',
            template: './src/index.html',
            filename: './index.html'
       }),

       new MinicssExtractPlugin({
            filename: '[name].[fullhash].css',
            ignoreOrder: false
       }),

       new CopyPlugin({
        patterns: [
            { from: 'src/assets', to: 'assets/'}
        ]
       })
    ],
}