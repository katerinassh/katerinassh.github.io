const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: './index.js',
    output: {
        filename: '[name]_bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '',
    },
    devServer: {
        port: 4200
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
        new CleanWebpackPlugin(),
        new CopyPlugin({
          patterns: [
            { from: "./assets/images", to: "assets/images" }
          ]
        }),
        new MiniCssExtractPlugin({
          filename: '[name].css'
        })
    ],
    module: {
        rules: [
          {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, "css-loader"]
          },
          {
            test: /\.s[ac]ss$/,
            use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
          },
          {
            test: /\.(png|jpg|svg)$/,
            use: [{
              loader: 'file-loader',
              options: {
                name: "[name].[ext]",
                outputPath: 'images/'
              }
            }],
          },
          {
            test: /\.ttf$/,
            use: [{
              loader: 'file-loader',
              options: {
                name: "[name].[ext]",
                outputPath: 'fonts/'
              }
            }],
          }
        ]
      }
}