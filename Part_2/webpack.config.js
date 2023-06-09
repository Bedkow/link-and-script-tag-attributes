const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = [{
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader',
                options: {
                    outputPath: 'images',
                },
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ],
    mode: 'production'
},{
    entry: path.resolve(__dirname, 'src/index.js'), 
    output: {
      filename: "bundle2.js"
    }, 
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: "babel-loader",
          options: {
            presets: [
              ["@babel/preset-env", {
                useBuiltIns: "usage",
                targets: {
                  esmodules: false
                }
            }]
          ]
        }
      }
    ]
  },
  mode: 'production'
}];
