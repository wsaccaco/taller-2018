const path = require('path');

module.exports = ({mode}) => {
  return {
    entry: './src/index.js',
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist')
    },
    devtool: 'inline-source-map',
    mode,
    devServer: {
      contentBase: './dist'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        }
      ]
    }
  };
};