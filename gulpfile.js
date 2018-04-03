'use strict';

// Requires gulp
const gulp = require('gulp');
// Requires the gulp-tslint plugin
const tslint = require('gulp-tslint');
// Requires the typescript plugin.
const tsc = require('gulp-typescript');
// Requires the typescript config.
const tsProject = tsc.createProject('tsconfig.json');

/**
* Lint all custom TypeScript files.
*/
gulp.task('tslint', () => {
    return gulp.src("src/**/*.ts")
        .pipe(tslint({formatter: 'prose'}))
        .pipe(tslint.report());
});

/**
 * Watch for changes in TypeScript files.
 * This wont watch newly created files while gulp is running,
 * if you make a new file stop gulp with ctrl-c and re-run.
 */
gulp.task('watch', function () {
  // Watch TypeScript files.
  gulp.watch('src/**/*.ts', ['tslint']).on('change', function (e) {
    console.log('TypeScript file ' + e.path + ' has been changed. Updating.');
  });

});

/**
* Perform gulp task that Lints all TypeScript files and
* watches for file changes.
*/
gulp.task('lintwatch', ['tslint', 'watch'], function () {
  console.log('Angular-Electron-Boilerplate Lint watch started');
});

/**
* Perform gulp task that Lints all TypeScript
*/
gulp.task('lint', ['tslint'], function () {
  console.log('Angular-Electron-Boilerplate Lint completed');
});

/**
* Default gulp task
*/
gulp.task('default', ['tslintwatch']);
