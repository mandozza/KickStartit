var gulp = require('gulp');
var uglify = require('gulp-uglify');
var sass = require('gulp-ruby-sass');
var plumber = require('gulp-plumber');
var livereload= require('gulp-livereload');

// Scripts Task
//Uglifies
gulp.task('scripts',function(){
	gulp.src('kickstartit/build/assets/js/*.js')
	.pipe(plumber())
	.pipe(uglify())
	.pipe(gulp.dest('kickstartit/build/assets/js/minjs'));
});

// Styles
//
gulp.task('styles',function(){
	gulp.src('kickstartit/build/sass/**/*.scss')
	.pipe(plumber())
	.pipe(sass({
		style: 'compressed'
	}))
	.pipe(gulp.dest('kickstartit/build/assets/css/styles.css'))
	.pipe(livereload());
});


// Watch
//watches js
gulp.task('watch',function(){
	//start live reload
	var server =livereload();

	gulp.watch('kickstartit/build/assets/js/*.js',['scripts']);
	gulp.watch('kickstartit/build/sass/**/*.scss',['styles']);
});


gulp.task('default', ['watch','styles']);