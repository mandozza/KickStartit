var gulp = require('gulp');
var uglify = require('gulp-uglify');

gulp.task('default',function(){
	gulp.src('kickstartit/build/assets/js/*.js')
	.pipe(uglify())
	.pipe(gulp.dest('kickstartit/build/assets/js/minjs'));
});