const nodeExternals = require('webpack-node-externals')
module.exports = {
  target: 'node',
  entry: {
    server: './server/app.js'
  },
  output: {
    path: __dirname 
  },
  externals: [nodeExternals()],
  module : {
    rules : [
      {
        test: /\.js$/,
        exclude: /node_module/,
        use: 'babel-loader' 
      },
      {
        test: /\.scss$/,
        use: ['isomorphic-style-loader',
                {
                  loader: 'css-loader',
                },
                {
                  loader: 'sass-loader'
                }
              ]
      }
    ]
  }
}