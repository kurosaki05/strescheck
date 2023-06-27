
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

//グラフ
var ctx1 = document.getElementById("radarChart1");
var myChart1 = new Chart(ctx1, {
  type: 'radar',
  data: {
    //データの各項目のラベル(上から時計回り)
    labels: ["心理的な仕事の負担（量）", "心理的な仕事の負担（質）", "自覚的な身体的負担度", "職場の対っ人関係でのストレス", "職場環境によるストレス", "仕事のコントロール度", "あなたの技能の活躍度", "あなたが感じている仕事の適性度", "働きがい"],
    //データ設定
    datasets: [
      {
        //グラフのデータ(上から時計回り)
        data: [50, 50, 50, 50, 50, 50, 50, 50, 50],
        //グラフ全体のラベル
        label: "ストレスの原因因子",
        //背景色
        backgroundColor: "rgba(255,0,0,0.5)",
        //線の終端を四角にするか丸めるかの設定。デフォルトは四角(butt)。
        borderCapStyle: "butt",
        //線の色
        borderColor: "rgba(255, 99, 132, 1)",
        //線を破線にする
        borderDash: [],
        //破線のオフセット(基準点からの距離)
        borderDashOffset: 0.0,
        //線と線が交わる箇所のスタイル。初期値は'miter'
        borderJoinStyle: 'miter',
        //線の幅。ピクセル単位で指定。初期値は3。
        borderWidth: 3,
        //グラフを塗りつぶすかどうか。初期値はtrue。falseにすると枠線だけのグラフになります。
        fill: true,
        //複数のグラフを重ねて描画する際の重なりを設定する。z-indexみたいなもの。初期値は0。
        order: 0,
        //0より大きい値にすると「ベジェ曲線」という数式で曲線のグラフになります。初期値は0。
        lineTension: 0
      }
    ]
  },
  //オプションの設定
  options: {
    scales: {
      r: {
        //グラフの最小値・最大値
        min: 0,
        max: 100,
        //背景色
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        //グリッドライン
        grid: {
          color: 'pink',
        },
        //アングルライン
        angleLines: {
          color: 'green',
        },
        //各項目のラベル
        pointLabels: {
          color: 'blue',
        },
      },
    },
  },
});

// カウント変数を定義
var counts = [0, 0, 0, 0, 0, 0];

// ボタンをクリックしたときに呼び出される関数
function count(buttonIndex) {
  // ボタンのインデックスに対応するカウントを1つ増やす
  counts[buttonIndex - 1]++;

  // チャートを描画
  drawChart();
}

// myChart.data.datasets[0].data=[0,0,0,0,0,0];
// (6) [0, 0, 0, 0, 0, 0]
// myChart.update();

//グラフ２
var ctx2 = document.getElementById("radarChart2");
var myChart = new Chart(ctx2, {
  type: 'radar',
  data: {
    //データの各項目のラベル(上から時計回り)
    labels: ["活気", "イライラ感", "疲労感", "不安感", "抑うつ感", "身体愁訴"],
    //データ設定
    datasets: [
      {
        //グラフのデータ(上から時計回り)
        data: [10, 20, 30, 40, 50, 60],
        //グラフ全体のラベル
        label: "ストレスによる心身反応",
        //背景色
        backgroundColor: "rgba(255,0,0,0.5)",
        //線の終端を四角にするか丸めるかの設定。デフォルトは四角(butt)。
        borderCapStyle: "butt",
        //線の色
        borderColor: "rgba(255, 99, 132, 1)",
        //線を破線にする
        borderDash: [],
        //破線のオフセット(基準点からの距離)
        borderDashOffset: 0.0,
        //線と線が交わる箇所のスタイル。初期値は'miter'
        borderJoinStyle: 'miter',
        //線の幅。ピクセル単位で指定。初期値は3。
        borderWidth: 3,
        //グラフを塗りつぶすかどうか。初期値はtrue。falseにすると枠線だけのグラフになります。
        fill: true,
        //複数のグラフを重ねて描画する際の重なりを設定する。z-indexみたいなもの。初期値は0。
        order: 0,
        //0より大きい値にすると「ベジェ曲線」という数式で曲線のグラフになります。初期値は0。
        lineTension: 0
      }
    ]
  },
  //オプションの設定
  options: {
    scales: {
      r: {
        //グラフの最小値・最大値
        min: 0,
        max: 100,
        //背景色
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        //グリッドライン
        grid: {
          color: 'pink',
        },
        //アングルライン
        angleLines: {
          color: 'green',
        },
        //各項目のラベル
        pointLabels: {
          color: 'blue',
        },
      },
    },
  },
});

// カウント変数を定義
var counts = [0, 0, 0, 0, 0, 0];

// ボタンをクリックしたときに呼び出される関数
function count(buttonIndex) {
  // ボタンのインデックスに対応するカウントを1つ増やす
  counts[buttonIndex - 1]++;

  // チャートを描画
  drawChart();
}

function drawChart() {

	myChart.data.datasets[0].data=counts;
	 myChart.update();
}


//グラフ３
var ctx3 = document.getElementById("radarChart3");
var myChart = new Chart(ctx3, {
  type: 'radar',
  data: {
    //データの各項目のラベル(上から時計回り)
    labels: ["上からのサポート", "同僚からのサポート", "家族や友人からのサポート", "仕事や生活の満足度"],
    //データ設定
    datasets: [
      {
        //グラフのデータ(上から時計回り)
        data: [50, 50, 50, 50],
        //グラフ全体のラベル
        label: "ストレス反応への影響因子",
        //背景色
        backgroundColor: "rgba(255,0,0,0.5)",
        //線の終端を四角にするか丸めるかの設定。デフォルトは四角(butt)。
        borderCapStyle: "butt",
        //線の色
        borderColor: "rgba(255, 99, 132, 1)",
        //線を破線にする
        borderDash: [],
        //破線のオフセット(基準点からの距離)
        borderDashOffset: 0.0,
        //線と線が交わる箇所のスタイル。初期値は'miter'
        borderJoinStyle: 'miter',
        //線の幅。ピクセル単位で指定。初期値は3。
        borderWidth: 3,
        //グラフを塗りつぶすかどうか。初期値はtrue。falseにすると枠線だけのグラフになります。
        fill: true,
        //複数のグラフを重ねて描画する際の重なりを設定する。z-indexみたいなもの。初期値は0。
        order: 0,
        //0より大きい値にすると「ベジェ曲線」という数式で曲線のグラフになります。初期値は0。
        lineTension: 0
      }
    ]
  },
  //オプションの設定
  options: {
    scales: {
      r: {
        //グラフの最小値・最大値
        min: 0,
        max: 100,
        //背景色
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        //グリッドライン
        grid: {
          color: 'pink',
        },
        //アングルライン
        angleLines: {
          color: 'green',
        },
        //各項目のラベル
        pointLabels: {
          color: 'blue',
        },
      },
    },
  },
});

// カウント変数を定義
var counts = [0, 0, 0, 0, 0, 0];

// ボタンをクリックしたときに呼び出される関数
function count(buttonIndex) {
  // ボタンのインデックスに対応するカウントを1つ増やす
  counts[buttonIndex - 1]++;

  // チャートを描画
  drawChart();
}




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


