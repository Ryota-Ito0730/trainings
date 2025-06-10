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

// Pugのコンパイル後、phpファイルを生成する(拡張子変更)
import rename from "gulp-rename";

// SassをDartSassでコンパイル
import * as dartSass from "sass";
import gulpSass from "gulp-sass";
const sass = gulpSass(dartSass);
// Sassコンパイル時にchasetが削除されないよう下記2点を追加
import replace from "gulp-replace";
import header from "gulp-header";


// webpに変更せずに圧縮する場合は、下記を有効にします
import imagemin from "gulp-imagemin";
import optipng from "imagemin-pngquant";
import mozjpeg from "imagemin-mozjpeg";

//webpに変換します
// import webp from "gulp-webp";

// 各タスクで指定するパスを読み込み
import pathObj from "./gulp/filePathConfig.js";

/** 
 * Sass(SCSS)をコンパイルするタスク
 */
const compileSass = () => {
  return src(pathObj.sass.src)
    .pipe(sass({ outputStyle: "expanded" })
    // エラー発生時に自動的に停止しないよう追加
    .on("error", sass.logError))
    // /*コメント*/が記載されていると@charset "UTF-8"が2つ記載されるのを防ぐ
    .pipe(replace(/@charset "UTF-8";/g, ''))
    // replaceで予め処理した上で@charset "UTF-8";を追加
    .pipe(header('@charset "UTF-8";\n\n'))
    .pipe(dest(pathObj.sass.dist))
    .pipe(browserSync.stream());
};


/**
 * Pugをコンパイルするタスク
 */
// 独自ルールに基づきpugに記載した内容からHTMLとPHPファイルを同時生成する際、
// PHP側はWordPressのテンプレートタグやループ処理に置換します
import {htmlReplaceRules, phpReplaceRules} from "./gulp/replaceRules.js";

import { pugLocals } from './gulp/pugLocals.js';

// 独自ルールによる置換処理(HTML)
const compilePugToHtml = () => {
  let stream = src(pathObj.pug.src).pipe(pug({
    pretty: true,
    locals: pugLocals
  })); 
  htmlReplaceRules.forEach(rule => {
    stream = stream.pipe(replace(rule.pattern, rule.replacement));
  });
  return stream.pipe(dest(pathObj.pug.dist));
};
// 独自ルールによる置換処理(PHP)
const compilePugToPHP = () => {
  let stream = src(pathObj.pug.src).pipe(pug({
    pretty: true,
    locals: pugLocals
  })); 
  phpReplaceRules.forEach(rule => {
    stream = stream.pipe(replace(rule.pattern, rule.replacement));
  });
  return stream
    .pipe(rename({ extname: ".php" }))// PHP側は明示的に拡張子をphpに変更する
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
  watch(pathObj.pug.src, series(compilePugToHtml,browserSyncReload));
  watch(pathObj.pug.src, series(compilePugToPHP,browserSyncReload));
  watch(pathObj.img.src, series(convertImage,browserSyncReload));
};

export default parallel(browserSyncStart, watchFiles);


