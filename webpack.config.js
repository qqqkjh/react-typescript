const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const DotenvWebpackPlugin = require('dotenv-webpack');

module.exports = (env, argv) => {

    const isDevelopment = argv.mode === 'development';
    const dotenvPath = isDevelopment ? '.env.development' : '.env.production';

    return {
        entry: './src/index.tsx',
        module: {
            rules: [
                {
                    test: /\.(js|jsx|ts|tsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env',
                                '@babel/preset-react',
                                '@babel/preset-typescript'
                            ]
                        }
                    }
                },
                {
                    test: /\.css$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                    ],
                },
            ]
        },
        resolve: {
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
            alias: {
                '@src': path.resolve(__dirname, 'src'),

            },
        },
        output: {
            filename: 'bundle.[hash].js',
            path: path.resolve(__dirname, 'dist')
        },
        devServer: {
            static: path.join(__dirname, 'dist'),
            port: 3000,
            hot: true,
            historyApiFallback: true,
        },
        devtool: 'inline-source-map', //'eval-cheap-source-map',
        plugins: [
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                template: 'public/index.html'
            }),
            new MiniCssExtractPlugin({
                filename: '[name].css',
                chunkFilename: '[id].css',
            }),
            new DotenvWebpackPlugin({
                path: path.resolve(__dirname, dotenvPath)
            }),
    ]}
};
