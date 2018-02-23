//引入gulp工具
var gulp = require("gulp");
//html模块
var htmlmin = require("gulp-htmlmin")
gulp.task("html",function () {
   gulp.src("./src/*.html")
       .pipe(htmlmin({"collapseWhitespace":true}))
       .pipe(gulp.dest("./dist/"))
       .pipe(browserSync.reload({
           stream:true
       }));
});
//图片模块
var imagemin = require("gulp-imagemin");
gulp.task("image",function () {
   gulp.src("./images/*.*")
       .pipe(imagemin())
       .pipe(gulp.dest("./dist/images"))
       .pipe(browserSync.reload({
           stream:true
       }));
});
//css模块
var less = require("gulp-less");
var cssnano = require("gulp-cssnano");
gulp.task("css",function () {
   gulp.src(["./src/style/*.less","!./src/style/_*.less"])
       .pipe(less())
       .pipe(cssnano())
       .pipe(gulp.dest("./dist/style/"))
       .pipe(browserSync.reload({
           stream:true
       }));
});
//javascript模块
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
gulp.task("script",function () {
   gulp.src("./src/js/*.js")
       .pipe(concat("final.js"))
       .pipe(uglify())
       .pipe(gulp.dest("./dist/js/"))
       .pipe(browserSync.reload({
           stream:true
       }));
});
//browsersync
var browserSync = require("browser-sync");
gulp.task("serve",function () {
   browserSync.init({
       server:{
           baseDir:"./"
       }
   });
    gulp.watch("./src/*.html",["html"]);
    gulp.watch(["./src/style/*.less","./src/style/_*.less"],["css"]);
    gulp.watch("./src/js/*.js",["script"]);
});

