/**
 * gulp-pugのlocalsに設定するダミー関数を定義します
 * 下記ダミー関数の名前を元に、replaceRules.js内置換処理が加えられ、
 * 最終的にhtmlとphpが生成されます。
 * 
 * 
 */

export const pugLocals = {
  wpGetTDUri: (path) => `wpGetTDUri(${path})`,
  // wpLoopStart: () => ':wpLoopStart()',
  // wpLoopEnd: () => ':wpLoopEnd()',
};