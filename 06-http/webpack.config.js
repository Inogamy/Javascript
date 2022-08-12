const HtmlWebPackPlugin = require('html-webpack-plugin');
const MinicssExtractPlugin  = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");


module.exports = {
    mode: 'development',

    output: {
        clean: true //limpia los html
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
            }           
        ]
    },
    optimization: {},


    plugins: [
       new HtmlWebPackPlugin({ // instancia el htmlwebpack y modifica al main
            title: 'Mi Webpack app',
            // filename: 'index.html',
            template: './src/index.html',
            filename: './index.html'
       }),

       new MinicssExtractPlugin({
            filename: '[name].css',
            ignoreOrder: false
       }),

       new CopyPlugin({
        patterns: [
            { from: 'src/assets', to: 'assets/'}
        ]
       })
    ],
}