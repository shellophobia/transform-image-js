var webpack = require('webpack');
var path = require('path');
var glob = require('glob');

function generateConfig(name) {
  var uglify = name.indexOf('min') > -1;
  var transformAllFiles = name === 'transform-image-all-files';
  var output = {
    path: path.resolve(__dirname, 'dist/'),
    filename: transformAllFiles ? '[name]' : name + '.js',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  };
  if (!transformAllFiles) {
    output.path = path.resolve(__dirname, 'lib/'),
    output.sourceMapFilename = name + '.map';
    output.library = 'transform-image-js',
  }
  var config = {
    entry: transformAllFiles ? getEntries('./src/**/*.js') : './index.js',
    output: output,
    node: {
      process: false
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        }
      ]
    },
    devtool: 'source-map',
    optimization: {
      minimize: uglify,
    }
  };

  config.plugins = [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ];

  return config;
}

function getEntries(pattern) {
  const entries = {};

  glob.sync(pattern).forEach((file) => {
    entries[file.replace('src/', '')] = path.join(__dirname, file);
  });

  return entries;
}

var webpackConfigs = ['transform-image-js', 'transform-image-js.min', 'transform-image-all-files'];

module.exports = {
  generateConfig: generateConfig,
  webpackConfigs: webpackConfigs
};