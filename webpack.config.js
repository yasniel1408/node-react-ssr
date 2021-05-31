var path = require('path');

module.exports = {
  entry: {
    authentication: './src/views/js/pages/authentication/Authentication.js',
    product: './src/views/js/pages/product/Product.js',
    ecomerce: './src/views/js/pages/ecomerce/Ecomerce.js',
    dashboard: './src/views/js/pages/dashboard/Dashboard.js'
  },
  output: {
    path: path.resolve(__dirname, 'public/dist'),
    filename: '[name].js'
  }, 
  watch: true,
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.json?$/,
        loader: 'json-loader'
      },
    ],
        
  }
}