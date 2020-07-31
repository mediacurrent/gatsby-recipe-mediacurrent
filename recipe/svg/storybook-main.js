module.exports = {
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      loader: 'svg-react-loader'
    });
    return config;
  }
};
