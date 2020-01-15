module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // config = {
    //   ...config,
    //   devServer: {
    //     compress: true, //compress HTTP response
    //     host: 'localhost',
    //     hot: true, //hot reload
    //     port: 5000,
    //     open: 'Google Chrome', // open new tab when starting, if true => default browser
    //     onListening: server => {
    //       const { port } = server.listeningApp.address();
    //       // eslint-disable-next-line no-console
    //       console.log(`THIS APP IS RUNNING IN PORT: ${port}`);
    //     }
    //   }
    // };
    console.log(config);
    return config;
  },
};
