var path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: './src/js/game_index.js',
  module: {
    rules: [{
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader?presets[]=react<Plug>PeepOpenresets[]=es2015<Plug>PeepOpenresets[]=stage-0',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=8192'
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname),
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    path: path.resolve(__dirname, 'src'),
    filename: 'bundle.js'

  },
  resolve: {
    extensions: ['.js', '.jsx', '.less', 'css']
  }
};
