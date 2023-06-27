//グラフ２
var ctx = document.getElementById("radarChart2");
var myChart = new Chart(ctx, {
  type: 'radar',
  data: {
    //データの各項目のラベル(上から時計回り)
    labels: ["活気", "イライラ感", "疲労感", "不安感", "抑うつ感"],
    //データ設定
    datasets: [
      {
        //グラフのデータ(上から時計回り)
        data: [1, 2, 3, 4, 5],
        //グラフ全体のラベル
        label: "ストレスの原因",
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
        max: 10,
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
var counts = [0, 0, 0, 0, 0];


// ボタンをクリックしたときに呼び出される関数
function count(buttonIndex) {
  
  // ボタンのインデックスに対応するカウントを1つ増やす
  // counts[buttonIndex - 1]++;

  //pointを付ける
  switch (buttonIndex) {
    case 1://ボタン1→5ポイント
      counts[0] += 5;
      break;
    case 2://ボタン2→4ポイント
      counts[1] += 4;
      break;
    case 3://ボタン3→3ポイント
      counts[2] += 3;
      break;
    case 4://ボタン4→2ポイント
      counts[3] += 2;
      break;
    case 5://ボタン5→ 1ポイント
      counts[4] += 1;
      break;
    default:
      break;
  }
  // チャートを描画
  drawChart();
}

function drawChart() {

  myChart.data.datasets[0].data = counts;
  myChart.update();
}



// カウンター変数
var clickCount = 0;

// ボタン要素を取得
var button = document.getElementById('button');

// ボタンがクリックされた時の処理
button.addEventListener('click', function () {
  clickCount++; // クリック回数を増やす
  checkClickCount(); // クリック回数をチェックして結果を表示
});

// クリック回数をチェックして結果を表示する関数
function checkClickCount() {
  if (clickCount >= 3) {
    document.getElementsByClassName("status").textContent = "あたり";
  }
}

// 初回チェック
checkClickCount();



//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

//グラフ
var ctxa = document.getElementById("radarChart1");
var myChart1 = new Chart(ctxa, {
  type: 'radar',
  data: {
    //データの各項目のラベル(上から時計回り)
    labels: ["a", "b", "c", "d", "e"],
    //データ設定
    datasets: [
      {
        //グラフのデータ(上から時計回り)
        data: [10, 10, 10, 10, 5],
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
        max: 10,
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

/// カウント変数を定義
var names = [0, 0, 0, 0, 0];


// ボタンをクリックしたときに呼び出される関数
function name1(buttonIndex) {
  
  // ボタンのインデックスに対応するカウントを1つ増やす
  // counts[buttonIndex - 1]++;

  //pointを付ける
  switch (buttonIndex) {
    case 1://ボタン1→5ポイント
      name1[0] += 5;
      break;
    case 2://ボタン2→4ポイント
      name1[1] += 4;
      break;
    case 3://ボタン3→3ポイント
    name1[2] += 3;
      break;
    case 4://ボタン4→2ポイント
    name1[3] += 2;
      break;
    case 5://ボタン5→ 1ポイント
    name1[4] += 1;
      break;
    default:
      break;
  }
  // チャートを描画
  drawChart1();
}

function drawChart1() {

  myChart1.data.datasets[0].data = names;
  myChart1.update();
}
