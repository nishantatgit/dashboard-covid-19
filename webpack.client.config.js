module.exports = {
  entry: {
    client: './client/index.js'
  },
  output: {
    path: __dirname + '/public'
  },
  module: {
    rules : [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
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