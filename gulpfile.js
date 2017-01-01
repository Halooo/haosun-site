/**
 * Created by hsun on 2016-12-31.
 */
import gulp from 'gulp';
import browserSync from 'browser-sync'

gulp.task('dev', ()=> {
    browserSync({
        server: {
            baseDir: 'public'
        }
    })
});