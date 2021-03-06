const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');
const autoprefixer = require('autoprefixer');

module.exports = ({mode}) => {
  return {
    entry: './src/js/index.js',
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'bundle.js',
      publicPath: "/scrabble-counter/"
      // publicPath: '../../'
    },
    mode,
    watch: true,
    resolve:
        { extensions: ['.js', '.ts'] },
    devtool: 'source-map',
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      port: 8080,
      inline: true,
      publicPath: '/',
      watchContentBase: true
    },
    module: {
      rules: [
        {
          test: /\.(html)$/,
          use: {
            loader: 'html-loader'
          }
        }, {
          test: /\.(png|jp(e*)g|gif|woff|woff2|eot|ttf|svg)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: '[name].[ext]',
                outputPath: 'assets/',
                useRelativePath: true,
              }
            },
            {
              loader: 'image-webpack-loader',
            }
          ]
        }, {
          test: /\.(s)css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader
            },{
              loader: "css-loader",
            },{
              loader: "resolve-url-loader",
            },{
              loader: "postcss-loader",
              options: {
                sourceMap: true,
                plugins: () => [
                  autoprefixer
                ]
              },
            },{
              loader: "sass-loader",
              options: {
                sourceMap: true
              }
            }
          ]
        }, {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: 'index.html',
        inject: true
      }),
      new MiniCssExtractPlugin({
        filename: 'styles.css'
      }),
      new CopyPlugin([
        { from: 'src', to: 'dist' }
      ])
    ]
  }
};
