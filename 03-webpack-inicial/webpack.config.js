const HtmlWebpack = require('html-webpack-plugin');
const MinicssExtractPlugin  = require("mini-css-extract-plugin");


module.exports = {
    mode: 'development',

    output: {
        clean: true //limpia los html
    },

    module: {
        rules: [
            {
                test: /\.html$/i,// busca a cualquier archivo html hace el requerimiento
                loader: 'html-loader',
                options: {
                    minimize: false,
                    sources: false,
                }
            },
            {
                test: /\.css$/,// busca cualquier archivo css hace el requermientos
                exclude: '/styles\.css$/i',
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /styles\.css$/,//Busca y evalua
                use: [ MinicssExtractPlugin.loader, 'css-loader' ]
            }
        ]
    },
    optimization: {},


    plugins: [
       new HtmlWebpack({ // instancia el htmlwebpack y modifica al main
            title: 'Mi Webpack app',
            // filename: 'index.html',
            template: './src/index.html'
       }),

       new MinicssExtractPlugin({
            filename: '[name].[fullhash].css',
            ignoreOrder: false
       })
    ],
}