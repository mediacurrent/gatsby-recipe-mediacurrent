module.exports = {
  stories: ['../src/**/*.stories.{js,jsx}'],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-actions',
    '@storybook/addon-a11y',
    '@storybook/addon-knobs'
  ],
  webpackFinal: async (config) => {
    config.node = { fs: 'empty', module: 'empty' };
    config.module.rules.push({
      // Config for js and jsx files
      test: /\.(js|jsx)$/,
      use: [
        {
          loader: require.resolve('babel-loader'),
          options: {
            presets: [
              // use @babel/preset-react for JSX and env (instead of staged presets)
              require.resolve('@babel/preset-react'),
              require.resolve('@babel/preset-env'),
              require.resolve('babel-preset-gatsby')
            ],
            plugins: [
              // use @babel/plugin-proposal-class-properties for class arrow functions
              require.resolve('@babel/plugin-proposal-class-properties'),
              // use babel-plugin-remove-graphql-queries to remove static queries from components when rendering in storybook
              require.resolve('babel-plugin-remove-graphql-queries'),
              // use @babel/plugin-proposal-optional-chaining to allow for js optional chaining in Storybook
              require.resolve('@babel/plugin-proposal-optional-chaining'),
              // use babel-plugin-react-docgen to ensure PropTables still appear
              require.resolve('babel-plugin-react-docgen')
            ]
          }
        }
      ],
      exclude: [/node_modules\/(?!(gatsby)\/)/]
    });

    // Add SCSS Modules support.
    config.module.rules.push({
      test: /\.scss$/,
      loaders: [
        require.resolve('style-loader'),
        {
          loader: require.resolve('css-loader'),
          options: {
            importLoaders: 1,
            modules: true,
            localIdentName: '[name]__[local]___[hash:base64:5]'
          }
        },
        require.resolve('sass-loader')
      ],
      // Exclude SVGs from the default config so we can use svg-react-loader.
      exclude: [/\.svg$/]
    });

    config.module.rules.push({
      test: /\.svg$/,
      loader: 'svg-react-loader'
    });

    return config;
  }
};
