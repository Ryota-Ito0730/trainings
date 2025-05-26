import gulp from "gulp";
const {src, dest, watch, series, parallel} = gulp;

// Browser Sync
import browserSync from "browser-sync";

// ブラウザをリロードするタスク
const browserSyncReload = (done) => {
  browserSync.reload(); // BrowserSyncを使ってブラウザをリロードする
  done();
}

const browserSyncStart = (done) => {
  browserSync.init({
    server: {
      baseDir: "./dist", // ルートとなるディレクトリを指定
    },
    startPath: "training01/index.html", 
    notify: true,// 画面右上の通知の有無
  });
  done();
}

// Pugのコンパイル用プラグイン
import pug from "gulp-pug";

// SassをDartSassでコンパイル
import * as dartSass from "sass";
import gulpSass from "gulp-sass";
const sass = gulpSass(dartSass);

// webpに変更せずに圧縮する場合は、下記を有効にします
import imagemin from "gulp-imagemin";
import optipng from "imagemin-pngquant";
import mozjpeg from "imagemin-mozjpeg";

//webpに変換します
// import webp from "gulp-webp";

// 各タスクで指定するパスを読み込み
import pathObj from "./gulpfilePathConfig.js";

/* Sass(SCSS)をコンパイルするタスク
 */
const compileSass = () => {
  return src(pathObj.sass.src)
    // コンパイルエラー発生時に自動的に止まらないように、
    // "on("error", sass.logError)"を追加
    .pipe(sass({ outputStyle: "expanded" }).on("error", sass.logError))
    .pipe(dest(pathObj.sass.dist))
    .pipe(browserSync.stream());
};

/**
 * Pugをコンパイルするタスク
 */
const compilePug = () => {
  return src(pathObj.pug.src)
    .pipe(pug({ pretty: true }))
    .pipe(dest(pathObj.pug.dist))
};

/**
 * 画像を圧縮します
 */
const convertImage = () => {
  return src(pathObj.img.src,{encoding: false})
    .pipe(imagemin([
      mozjpeg({quality: 75, progressive: true}),
      optipng({optimizationLevel: 5}),
    ]))
    .pipe(dest(pathObj.img.dist))
};

// Webpに変換する場合は、上記タスクは無効化し、下記を有効化します
// const convertImage = () => {
// 	return src(pathObj.img.src,{encoding: false})
//     .pipe(webp({quality: 50}))
//     .pipe(dest(pathObj.img.distWebp))
// };

/**
 * 各ファイルを監視し、変更があったらSassやHTMLを変換するタスク
 */
const watchFiles = () => {
  watch(pathObj.sass.src, compileSass);
  watch(pathObj.pug.src, series(compilePug,browserSyncReload));
  watch(pathObj.img.src, series(convertImage,browserSyncReload));
};

export default parallel(browserSyncStart, watchFiles);


