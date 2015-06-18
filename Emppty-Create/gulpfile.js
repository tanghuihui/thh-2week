/**
 * Created by Administrator on 2015/6/18.
 */
var gulp = require('gulp'),
    minifycss = require('gulp-minify-css'),
    imagemin=require('gulp-imagemin'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    zip=require('gulp-zip');

gulp.task('minifycss',function(){
    return  gulp.src(['./public/css/*.css']).pipe(minifycss()).pipe(rename({suffix: '.min'})).pipe(gulp.dest('./build/css')).pipe(concat('all.min.css')).pipe(gulp.dest('./build/css'));
});
gulp.task('imagemin',function(){
  return  gulp.src(['./public/images/*']).pipe(imagemin()).pipe(rename({suffix: '.min'})).pipe(gulp.dest('./build/images'));
});
gulp.task('uglify',function(){
    return  gulp.src(['./public/javascript/*.js']).pipe(uglify()).pipe(rename({suffix: '.min'})).pipe(gulp.dest('./build/js')).pipe(concat('all.min.js')).pipe(gulp.dest('./build/js'));
});
gulp.task('zip',function(){
    return  gulp.src(['**/*', '!./.idea', '!./.idea/**/*', '!./node_modules', '!./node_modules/**/*']).pipe(zip('zip.zip')).pipe(gulp.dest('../publish'));
});
//gulp.task('default',['minifycss','imagemin','uglify','zip']);
//gulp.task('default',['zip']);
gulp.task('default', ['minifycss','imagemin','uglify'], function() {
    gulp.start('zip');
});