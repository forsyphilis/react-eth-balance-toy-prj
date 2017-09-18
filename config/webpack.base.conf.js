let path = require('path')

module.exports = {
    entry:{
        app: './src/App.js'
    },
    output: {
        path: path.resolve('./', './dist'),
        filename: '[name].js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                // enforce: 'pre',
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                include:/src/,
                exclude: /(node_modules|config|build)/,
                query: {
                    presets: ['es2015', 'stage-0', 'stage-2', 'react'],
                    plugins: ["transform-decorators-legacy"]

                }
            }
        ]
    },
    resolve: {
        alias: {
            'web3': 'web3' // 'vue/dist/vue.common.js'  -> webpack 1
        }
    }
}