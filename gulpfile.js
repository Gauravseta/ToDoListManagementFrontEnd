var gulp=require('gulp');

var browserSync=require('browser-sync').create();


var port="8081";
gulp.task('watch',['browserSync'],function(){
	gulp.watch('app/*.html',browserSync.reload);
	gulp.watch('app/js/**/*.js',[browserSync.reload]);
});



gulp.task('browserSync',function(){

	browserSync.init({
		server:{
		   baseDir:'app'
		},
		port:port,
		reloadDelay:4000
	})
});







