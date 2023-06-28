// 一枚の画面ずつ右にスライドさせる
// ボタンを押すと次にスライド
// 質問スライドを複製
// ボタンに点数が付与される
// 条件分岐しそれぞれの項目の点数を出す
// ifで条件分岐し合計点を出す
//合計点をエクセルの表の関数に入れ込んでいく
const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
