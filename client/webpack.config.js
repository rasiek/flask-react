const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")


module.exports = {
    entry: {
        index: "./src/index.js"
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader",
                options: { presets: ["@babel/env", "@babel/react"] }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader',
                },
            }
        ]
    },
    resolve: {
        extensions: [
            "*", ".js", ".jsx"
        ]
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"

    },
    devServer: {
        port: 3000,
        proxy: {
            '/graphql': {
                target: 'http://localhost:5000',
                // pathRewrite: { '^/graphql': "" },
                changeOrigin: true,
                secure: false,
            },
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            filename: "./index.html"
        })
    ]

}