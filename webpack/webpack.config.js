const path = require('path');

module.exports = ({env}) => {
  return {
    entry: './src/index.js',
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist'),
    },
    mode: env,
    devtool: 'source-map-inline',
    devServer: {
      contentBase: 'dist',
      compress: true,
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            {loader: 'style-loader'},
            {loader: 'css-loader'},
          ],
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
      ],
    },
  };
};