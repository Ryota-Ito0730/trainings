<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>training03</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100..900&amp;display=swap" rel="stylesheet">
    <link rel="stylesheet" href="/assets/css/reset.css">
    <link rel="stylesheet" href="/assets/css/base.css">
    <link rel="stylesheet" href="/assets/css/training03/style.css">
  </head>
  <body> 
    <header class="header">
      <div class="header__inner">
        <h1 class="logo"><a href="#"><img src="/assets/img/training03/logo.png" alt="PHOTO BOOK 2ページのロゴマーク"></a></h1>
      </div>
    </header>
    <main class="main"> 
      <div class="main__inner">
        <div class="mv"> 
          <div class="mv__inner"><img class="mv__img" src="/assets/img/training03/mv.png" alt="PHOTO BOOKページのイメージ画像。建物の屋根と青空が強調されて撮影されている。"></div>
        </div>
        <section class="sec sec--index">
          <div class="sec__inner sec__inner--index">
            <div class="content content--index--top">
              <h2 class="font-title">:<?php the_title(); ?></h2>
              <div class="content__inner content__inner--index">
                <ul class="list">
                  <li class="list__item list__item--first">1. タイトルタイトルタイトルタイトルタイトルタイトルタイトル</li>
                  <li class="list__item">2. タイトルタイトルタイトルタイトルタイトルタイトルタイトル</li>
                  <li class="list__item">3. タイトルタイトルタイトルタイトルタイトルタイトルタイトル</li>
                  <li class="list__item">4. タイトルタイトルタイトルタイトルタイトルタイトルタイトル</li>
                  <li class="list__item">5. タイトルタイトルタイトルタイトルタイトルタイトルタイトル</li>
                </ul>
              </div>
            </div>
            <div class="content content--index--bottom">
              <div class="images">
                <div class="images__item"><img src="/assets/img/training03/image01.png" alt=""></div>
                <div class="images__item"><img src="/assets/img/training03/image02.png" alt=""></div>
                <div class="images__item"><img src="/assets/img/training03/image03.png" alt=""></div>
                <div class="images__item"><img src="/assets/img/training03/image04.png" alt=""></div>
              </div>
            </div>
          </div>
        </section>
        <section class="sec sec--detail">
          <div class="sec__inner sec__inner--detail">
            <div class="content content--detail">
              <h2 class="font-title">:<?php the_title(); ?></h2>
              <div class="content__inner content__inner--detail">
                <div class="content-left">
                  <table class="table font-text">
                    <tr class="table__row"> 
                      <th class="table__head">著者</th>
                      <td class="table__desc">タイトルタイトルタイトル</td>
                    </tr>
                    <tr class="table__row"> 
                      <th class="table__head">出版社</th>
                      <td class="table__desc">タイトルタイトルタイトル</td>
                    </tr>
                    <tr class="table__row"> 
                      <th class="table__head">発行年</th>
                      <td class="table__desc">2021年1月1日</td>
                    </tr>
                  </table>
                </div>
                <div class="content-right font-text">
                  <div class="content-right__inner">
                    <p class="content__text first">テキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
                    <p class="content__text">テキストテキストテキストテキストテキストテキストテキストテキストテキスト</p><a class="link" href="#">オンラインストアで見る</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
    <footer class="footer">
      <div class="footer__inner"><small class="footer__copy">&copy; 2021 PHOTO BOOK 2</small></div>
    </footer>
  </body>
</html>