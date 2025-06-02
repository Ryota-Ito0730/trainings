/**
 * gulpfile.js内の各タスクで指定するパスを本ファイルに集約します
 * 注意:本ファイルはgulpfile.jsでのみ使用します
 * 
 * _src:開発中の参照先や監視先を指定します
 * dist:公開用ファイルの出力先を指定します
 */

const pathObj = {
  sass : {
    src: "./_src/assets/scss/**/*.scss",
    dist : "./dist/assets/css/"
  },
  pug : {
    src: [
      "./_src/*.pug",
      "./_src/**/*.pug",
      "!./_src/**/inc/*.pug"// incフォルダをコンパイル対象から除外
    ],
    dist : "./dist/"
  },
  img : {
    src: "./_src/assets/**/*.{jpg,jpeg,png}",
    dist : "./dist/assets/", // 拡張子の変更はしない場合に指定
    distWebp : "./dist/assets/img/webp" // WebPへ変換する場合に指定
  },
}

export default pathObj;