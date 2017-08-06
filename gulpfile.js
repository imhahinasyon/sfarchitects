// Include gulp
var gulp = require('gulp'),

// Include Our Plugins
autoprefixer = require('gulp-autoprefixer'),
sass = require('gulp-sass'),
sourcemaps = require('gulp-sourcemaps'),
sitemap = require('gulp-sitemap'),
imageOptim = require ('gulp-imageoptim'),
cleanCSS = require('gulp-clean-css'),
include = require ('gulp-include');

var input = './src/scss/**/*.scss';
var output = './public/assets/css';



// Compile Our Sass
gulp.task('sass', function() {
    return gulp
        .src(input)
        .pipe(sass())

        // Autoprefixer
        .pipe(autoprefixer({
          browsers: ['last 2 versions'],
          cascade: false
        }))

        // SCSS Source Maps
        .pipe(sourcemaps.write('./scss/maps'))

        // CSS Output Folder
        .pipe(gulp.dest(output));
});

// Minify our CSS
gulp.task('minify-css', function() {
  return gulp.src('./public/assets/css/style.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./public/assets/css/minify'));
})

// Optimize Images
gulp.task('images', function() {
   return gulp.src('./src/images/**/*')
       //.pipe(imageOptim.optimize())
       .pipe(gulp.dest('./public/assets/images'));
});


// Watch Files for Changes (SCSS, JS, HTML)
gulp.task('watch', function() {
  gulp.watch(input, ['sass']);
  gulp.watch('./src/js/**/*.js', ['scripts']);
});



