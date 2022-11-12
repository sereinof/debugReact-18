const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        port: 9000,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-flow'],
                    },
                },
            },
        ],
    },
    resolve:{
        alias: {
            react: path.resolve(__dirname, "./src/react/packages/react"),
            "react-dom": path.resolve(__dirname, "./src/react/packages/react-dom"),
            shared: path.resolve(__dirname, "./src/react/packages/shared"),
            "react-reconciler": path.resolve(
              __dirname,
              "./src/react/packages/react-reconciler"
            ),
            scheduler: path.resolve(__dirname, "./src/react/packages/scheduler"),
            "react-devtools-scheduling-profiler": path.resolve(
              __dirname,
              "./src/react/packages/react-devtools-scheduling-profiler"
            ),
            "react-devtools-shared": path.resolve(
              __dirname,
              "./src/react/packages/react-devtools-shared"
            ),
            "react-devtools-timeline": path.resolve(
              __dirname,
              "./src/react/packages/react-devtools-timeline"
            ),
            "react-dom-bindings": path.resolve(__dirname, "./src/react/packages/react-dom-bindings"),
          },
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        }),
        new webpack.DefinePlugin({
            __DEV__:true,
            __PROFILE__:true,
            __EXPERIMENTAL__:true,
        })
    ],
}