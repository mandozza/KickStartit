var gulp = require('gulp'),
gulpLoadPlugins = require('gulp-load-plugins'),
plugins = gulpLoadPlugins();

//Images
gulp.task('images',function(){
	gulp.src('KickStartit/build/assets/img/*')
	.pipe(plugins.plumber())
	.pipe(plugins.imagemin())
	.pipe(gulp.dest('KickStartit/production/assets/img/'));
});


// Scripts Task
//Concatinate and uglify
gulp.task('scripts',function(){
	gulp.src('KickStartit/build/assets/js/*.js')
	.pipe(plugins.plumber())
	.pipe(plugins.concat('concat.js'))
	.pipe(plugins.uglify())
	.pipe(gulp.dest('KickStartit/build/assets/js/minjs'));
});


// Styles
gulp.task('styles',function(){
	gulp.src('KickStartit/build/sass/styles.scss','KickStartit/build/sass/**/*.scss')
	.pipe(plugins.plumber())
	.pipe(plugins.rubySass({
		style: 'compressed'
	}))
	.pipe(plugins.autoprefixer('last 2 versions'))
	.pipe(gulp.dest('KickStartit/build/assets/css/'))
	.pipe(plugins.connect.reload());
});


gulp.task('connect', function() {
  plugins.connect.server({
    root: 'KickStartit/build/',
    livereload: true
  });
});

gulp.task('fileinclude', function() {
  gulp.src(['KickStartit/build/index.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('./'));
});


// Watch
//watches js
gulp.task('watch',function(){
	gulp.watch('KickStartit/build/assets/js/*.js',['scripts']);
	gulp.watch('KickStartit/build/sass/**/*.scss',['styles']);
	gulp.watch('KickStartit/build/*.html',['styles']);
});


gulp.task('default', ['connect','watch','styles']);
gulp.task('images', ['images']);
gulp.task('html', ['fileinclude']);