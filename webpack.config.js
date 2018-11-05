/*********************************************************************
 * Created by deming-su on 2017/12/30
 *********************************************************************/

const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const ChunkCleanPlugin = require("./ChunkCleanPlugin");

module.exports = {
    entry: {
        "main.min": ["babel-polyfill","./devPkg/main.js"]
    },

    output: {
        path: path.join(__dirname, './static'),
        publicPath: '/static/',
        filename: '[name].js',
        chunkFilename: "[name].[hash:8].js"
    },

    resolve: {
        extensions: ['.js', '.vue', '.json', '.ts', '.css']
    },

    module: {
        noParse: /es6-promise\.js$/,

        rules: [{
                test: /\.vue$/,
                loader: 'vue-loader'
            },

            {
                test: /\.css$/,
                include: [
                    path.resolve(__dirname, "node_modules")
                ],
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader',
                    ]
                })
            },

            {
                test: /\.less$/,
                include: [
                    path.resolve(__dirname, "devPkg")
                ],
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader',
                        'less-loader'
                    ]
                })
            },
            {
                test: /\.js$/,
                exclude: /node_modules|vue\/dist|vue-router\/|vue-loader\/|vue-hot-reload-api\//,
                include: [path.resolve(__dirname, "devPkg")],
                loader: 'babel-loader'
            },
            {
                test: /\.(png|jpg|gif|ttf|svg|woff|eot)$/,
                loader: 'url-loader',
                options: {
                    limit: 3000,
                    name: './images/[name].[ext]?[hash]'
                }
            }
        ]
    },
    plugins: [
        new ChunkCleanPlugin(path.join(__dirname, './static')),
        new ExtractTextPlugin('./style/main.css')
    ],
    devServer: {
        proxy: [
            {
                context: ["/api", '/assets', '/pngDictionary', '/file_dist'],
                target: "http://47.104.197.222:9800",
                pathRewrite: {"^/api": ""},
                secure: false
            }
        ]
    }
};