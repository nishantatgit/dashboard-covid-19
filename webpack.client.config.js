const path = require('path');
module.exports = {
  entry: {
    client: './client/pages/HomePage/index.js',
    america: './client/pages/HomePageUSA/index.js',
  },
  output: {
    path: __dirname + '/public',
  },
  module: {
    rules: [
      // {
      //   test: /\.js$/,
      //   use: ['babel-loader'],
      //   exclude: /node_modules/
      // },
      {
        test: /\.tsx$|\.ts$|\.js$/,
        use: ['ts-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'tee-loader',
            
              options: { label: 'after-style-loader-@@@@@@@@@@@@@@@'}
            
          },
          {
            loader: 'style-loader',
          },
          {
            loader: 'tee-loader',
            
              options: { label: 'after-css-loader-@@@@@@@@@@@@@@@'}
            
          },
          {
            loader: 'css-loader',
          },  
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'initial',
        },
      },
    },
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [".ts", ".tsx", ".js", ".css", ".scss"]
  },
  resolveLoader : {
    alias : {
        'tee-loader' : path.resolve(__dirname, './loaders/tee-loader.js')
    }
  }
};
