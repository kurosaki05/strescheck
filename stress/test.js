
$(function () {
  //現在のコンテンツ番号を管理
  var index = 0;

  //コンテンツの数を取得
  var slideCount = $(".js-sliderItem").length;

  console.log(slideCount);

  //目的のコンテンツまでスライドする独自関数
  function sliding() {
    //現在のコンテンツ番号が0より小さいかチェック
    if (index < 0) {
      //コンテンツ番号をコンテンツ数から1引いた値にする。
      index = slideCount - 1;
    }

    //コンテンツ番号がコンテンツ数以上かチェック
    if (index > slideCount - 1) {
      //コンテンツ番号を0にする
      index = 0;
    }

    //leftの値をアニメーションで変更
    $("#js-slider").stop().animate({
      left: "-1000" * index
    }, 100);
  }

  //「前へ」ボタンをクリックした時の処理
  $("#js-sliderPrevButton").click(function () {
    //現在のコンテンツ番号から1を引く
    index--;
    sliding();
  });
  //「次へ」ボタンをクリックした時の処理
  $(".m-sliderNav__item").click(function () {
    //現在のコンテン番号に1を足す
    index++;
    sliding();
    checkStressLevel();
  });

  //「男・女」ボタンをクリックした時の処理
  $(".1btn").click(function () {
    //現在のコンテン番号に1を足す
    index++;
    sliding();
  });

});

// // ボタンがクリックされたときに点数をカウントする
// var answerButtons = document.getElementsByClassName("m-button --answer");
// var totalPoints = 0;
// for (var i = 0; i < answerButtons.length; i++) {
//   answerButtons[i].addEventListener("click", function () {
//     totalPoints += parseInt(this.dataset.points);
//   });
// }

// // 回答送信ボタンがクリックされたときに、合計点数を表示する
// var submitButton = document.getElementById("submit-button");
// submitButton.addEventListener("click", function () {
//   alert("合計点数は" + totalPoints + "点です。");
// });




// ボタンがクリックされたときに点数をカウントする
var answerButtons = document.getElementsByClassName("m-button --answer1");
var totalPoints1 = 0;
for (var i = 0; i < answerButtons.length; i++) {
  answerButtons[i].addEventListener("click", function () {
    totalPoints1 += parseInt(this.dataset.points);
    myChart1.data.datasets[0].data[0] = totalPoints1;
    console.log(myChart1.data.datasets[0].data)
    myChart1.update();  

  });
}

var answerButtons = document.getElementsByClassName("m-button --answer2");
var totalPoints2 = 0;
for (var i = 0; i < answerButtons.length; i++) {
  answerButtons[i].addEventListener("click", function () {
    totalPoints2 += parseInt(this.dataset.points);
  });
}

var answerButtons = document.getElementsByClassName("m-button --answer3");
var totalPoints3 = 0;
for (var i = 0; i < answerButtons.length; i++) {
  answerButtons[i].addEventListener("click", function () {
    totalPoints3 += parseInt(this.dataset.points);
  });
}


// 各条件をチェックして結果を表示する関数
function checkStressLevel() {
  if (totalPoints2 >= 77 || (totalPoints1 + totalPoints3 >= 76 && totalPoints2 >= 63)) {
    document.getElementById("status").textContent = "高ストレス者";
  } else {
    document.getElementById("status").textContent = "ストレスフリー";
  }
}

// 初回チェック
// checkStressLevel();



// 回答送信ボタンがクリックされたときに、合計点数を表示する
var submitButton1 = document.getElementById("submit-button");
submitButton1.addEventListener("click", function () {

  alert("合計点数は" + totalPoints1 + "点です。"+"合計点数は" + totalPoints2 + "点です。"+"合計点数は" + totalPoints3 + "点です。");

});


