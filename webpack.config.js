const path = require('path');
// entry should be my client (eg, react pages) directory
module.exports = {
  entry: './src/client/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react', 'env', 'stage-1'],
          },
        },
      },
    ],
  },
  watch: true,
  watchOptions: {
    ignored: /node_modules/,
  },
};
