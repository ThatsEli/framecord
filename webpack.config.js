const path = require('path');
const LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
  entry: './src/index.ts',
  plugins: [
    new LiveReloadPlugin({
      delay: 50
    })
  ],
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.ts', '.js' ]
  },
  output: {
    filename: './lib/bundle.js',
    path: path.resolve(__dirname, '')
  },
  target: 'node'
};

