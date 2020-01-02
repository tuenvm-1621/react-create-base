const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  watch: true,
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'output.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/env', '@babel/react']
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.ico',
      inject: true
    }),
  ],
  resolve: {
    extensions: ['.json', '.js'],
    alias: {
      rootFolder: path.resolve(__dirname, './src'),
    }
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    host: 'localhost',
    hot: true,
    port: 3000,
    open: 'Google Chrome', //open new tab when starting, if true => default browser
    onListening: server => {
      const port = server.listeningApp.address().port;
      console.log(`THIS APP IS RUNNING IN PORT: ${port}`);
    }
  }
};
