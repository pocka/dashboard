const path = require('path')

const ForkTsCheckerPlugin = require('fork-ts-checker-webpack-plugin')

module.exports = {
  stories: ['../src/**/*.stories.[tj]s'],
  addons: ['@storybook/addon-docs'],
  webpackFinal(config) {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        extensions: ['.ts', '.js', '.mjs']
      },
      module: {
        ...config.module,
        rules: [
          {
            test: /\.ts$/,
            oneOf: [
              {
                resourceQuery: /spec/,
                use: [
                  {
                    loader: 'web-component-analyzer-loader'
                  }
                ]
              },
              {
                use: [
                  {
                    loader: 'ts-loader',
                    options: {
                      transpileOnly: true
                    }
                  }
                ]
              }
            ]
          },
          {
            test: /\.stories.ts$/,
            enforce: 'post',
            use: ['hmr-force-reload-loader']
          },
          ...config.module.rules
        ]
      },
      plugins: [...config.plugins, new ForkTsCheckerPlugin()]
    }
  }
}
