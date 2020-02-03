// eslint-disable-next-line import/no-extraneous-dependencies
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['@babel/polyfill', './src/client/index.js'], //indicate module to begin building the internal dependency graph (prepare needed modules)
  // watch: true, //after initial build, webpack will continue to watch for changes in resolved files
  output: { //files after builds - optimizes browsers when css, js... have no change
    path: path.join(__dirname, '/build'),
    filename: 'output.js',
    publicPath: '/',
  },
  module: { // determine how diff types of modules should be treated
    rules: [ // apply loaders to the module, or modify the parser
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: { //options of above loader, with loader, these are the short version of Rule.use use: { loader..., options: .... }
          presets: ['@babel/env', '@babel/react'],
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], // no options
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
    ],
  },
  plugins: [ // customize webpack build process
    new HtmlWebpackPlugin({ // simplifies create of HTML files to server webpack bundles.
      template: './public/index.html',
      favicon: './public/favicon.ico',
      inject: true,
    }),
  ],
  resolve: { // options change how modules are resolved.
    extensions: ['.json', '.js'],
    alias: {
      components: path.resolve(__dirname, './src/client/components'), //alias the import path '../../components/Alias' => 'components/Alias'
    },
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true, //compress HTTP response
    host: 'localhost',
    hot: true, //hot reload
    port: 3000,
    open: 'Google Chrome', // open new tab when starting, if true => default browser
    onListening: server => {
      const { port } = server.listeningApp.address();
      // eslint-disable-next-line no-console
      console.log(`THIS APP IS RUNNING IN PORT: ${port}`);
    },
  },
};
