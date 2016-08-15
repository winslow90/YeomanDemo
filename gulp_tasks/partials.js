const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const angularTemplatecache = require('gulp-angular-templatecache');

const conf = require('../conf/gulp.conf');

gulp.task('partials', partials);

function partials() {
  return gulp.src(conf.path.src('app/**/*.html'))
    .pipe(htmlmin())
      // the script to set the $templateCache
    .pipe(angularTemplatecache('templateCacheHtml.js', {
        //the model to put set the templateCacheHtml
      module: conf.ngModule,
        //the root directory to store the script
      root: 'app'
    }))
    .pipe(gulp.dest(conf.path.tmp()));
}
