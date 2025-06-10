/**
 * pugのコンパイル後、独自ルールに基づきWordPress用テンプレートタグを生成します
 * HTMLとPHP同時に生成する際に使用します
 * 
 * 注意:本ファイルはgulpfile.jsでのみ使用します
 * 
 */
/*
[定義候補]
wpTitle = the_title()に相当するテキスト
wpTaxName = タクソノミーの名前に相当するテキスト
wpTermName = タームの名前に相当するテキスト

・画像パス
・aタグのリンク
・aタグのalt
※エスケープ処理込みとする

・メインループ
・サブループ




*/


export const htmlReplaceRules = [
  {
    pattern: /wpTitle\((.*?)\)/g,
    replacement: '$1'
  },
  {
    pattern: /wpContent\((.*?)\)/g,
    replacement: '$1'
  },
  {
    pattern: /wpGetTDUri\((.*?)\)/g,
    replacement: '$1'
  },
];

export const phpReplaceRules = [
  {
    pattern: /wpTitle\((.*?)\)/g,
    replacement: '<?php the_title(); ?>'
  },
  {
    pattern: /wpContent\((.*?)\)/g,
    replacement: '<?php the_content(); ?>'
  },
  {
    pattern: /wpGetTDUri\((.*?)\)/g,
    replacement: '<?php echo get_template_directory_uri(); ?>$1'
  },
];

