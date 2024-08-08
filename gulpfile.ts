const { src, dest, series, watch } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const cleanCSS = require('gulp-clean-css')
const rename = require('gulp-rename')
const path = require('path')
const header = require('gulp-header')
const uglify = require('gulp-uglify');

const headerComment = `/**
* Copyright (c) 2023 by Multividas.
* All rights reserved.
*
* This code is developed by Multividas and is protected under international copyright laws.
* Unauthorized reproduction, distribution, or modification of this code is strictly prohibited.
*
* Website: https://www.multividas.com
*/\n`

const cleanScript = () => {
  // Define the source and destination paths
  const scriptFile = './dist/js/script.js';

};

const buildComponentsStyles = () => {
  const destinationPath = path.resolve(__dirname, './dist/css/')

  return src('./src/sass/styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(rename('mvemoji-reaction-list.css'))
    .pipe(header(headerComment))
    .pipe(dest(destinationPath))
}

const buildScripts = () => {
  const destinationPath = path.resolve(__dirname, './dist/js/')

  return src('./dist/js/script.js')
    .pipe(uglify())
    .pipe(header(headerComment))
    .pipe(dest(destinationPath))
}

const watchFiles = () => {
  watch('./src/sass/**/*.scss', series(buildComponentsStyles, buildScripts))
}

exports.build = series(buildComponentsStyles, buildScripts)
exports.watch = series(exports.build, watchFiles)
