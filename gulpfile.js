var gulp = require("gulp");
var webpack = require("webpack");
var genConfig = require("./webpack-gen-config.js");

genConfig.webpackConfigs.forEach(function (configName) {
  gulp.task(configName, function () {
    return new Promise(function (resolve, reject) {
      var webpackConfig = genConfig.generateConfig(configName);
      webpack(webpackConfig, function (err, stats) {
        if (err) {
          return reject(err);
        }
        if (stats.hasErrors()) {
          return reject(new Error(stats.compilation.errors.join("\n")));
        }
        resolve();
      });
    });
  });
});

exports.build = gulp.series.apply(gulp.series, genConfig.webpackConfigs);
