var gulp = require('gulp'),
gulpLoadPlugins = require('gulp-load-plugins'),
plugins = gulpLoadPlugins();

//Images
gulp.task('images',function(){
	gulp.src('kickstartit/build/assets/img/*')
	.pipe(plugins.plumber())
	.pipe(plugins.imagemin())
	.pipe(gulp.dest('kickstartit/production/assets/img/'));
});


// Scripts Task
//Concatinate and uglify
gulp.task('scripts',function(){
	gulp.src('kickstartit/build/assets/js/*.js')
	.pipe(plugins.plumber())
	.pipe(plugins.concat('concat.js'))
	.pipe(plugins.uglify())
	.pipe(gulp.dest('kickstartit/build/assets/js/minjs'));
});



// Styles
//
gulp.task('styles',function(){
	gulp.src('kickstartit/build/sass/**/*.scss')
	.pipe(plugins.plumber())
	.pipe(plugins.rubySass({
		style: 'compressed'
	}))
	.pipe(plugins.autoprefixer('last 2 versions'))
	.pipe(gulp.dest('kickstartit/build/assets/css/styles.css'))
	.pipe(plugins.livereload());
});


// Watch
//watches js
gulp.task('watch',function(){
	//start live reload
	var server =plugins.livereload();

	gulp.watch('kickstartit/build/assets/js/*.js',['scripts']);
	gulp.watch('kickstartit/build/sass/**/*.scss',['styles']);
});


gulp.task('default', ['watch','styles']);
gulp.task('images', ['images']);