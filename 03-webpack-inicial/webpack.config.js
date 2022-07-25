const HtmlWebpack = require('html-webpack-plugin')


module.exports = {
    mode: 'development',

    output: {
        clean: true //limpia los html
    },

    module: {
        rules: [
            {
                test: /\.html$/,// busca a cualquier archivo html hace el requerimiento
                loader: 'html-loader',
                options: {
                    sources: false
                }
            },
            {
                test: /\.css$/,// busca cualquier archivo css hace el requermientos
                use: [ 'style-loader', 'css-loader']
            }
        ]
    },
    optimization: {},


    plugins: [
       new HtmlWebpack({ // instancia el htmlwebpack y modifica al main
            title: 'Mi Webpack app',
            // filename: 'index.html',
            template: './src/index.html'
       })
    ],
}