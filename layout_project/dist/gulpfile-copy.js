const { src, dest } = require('gulp');

const copyFile = () => {
    return src('dist/scss/index.scss')
        .pipe(dest('css/style.css'))
}

exports.copyStyle = copyFile;
