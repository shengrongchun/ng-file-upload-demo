/* = Gulp组件
 -------------------------------------------------------------- */
// 引入gulp
var gulp            = require('gulp');                  // 基础库

// 引入我们的gulp组件
var webserver       = require('gulp-webserver');        // 本地服务器

var Proxy = require('gulp-connect-proxy');

/* = 全局设置
 -------------------------------------------------------------- */
var srcPath = {
    src : 'src',
    css     : 'src/css',
    script  : 'src/js',
    image   : 'src/images'
};

// 本地服务器
gulp.task('webserver', function() {
    gulp.src( srcPath.src ) // 服务器目录（.代表根目录）
        .pipe(webserver({ // 运行gulp-webserver
            livereload: true, // 启用LiveReload
            open: true, // 服务器启动时自动打开网页
            proxies: [
                {
                    source: '/upload', target: 'http://localhost:3009/upload'
                }
            ]

        }));
});
// 默认任务
gulp.task('default',['webserver']);
