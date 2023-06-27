//グラフ1
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
        data: [10, 10, 10, 10, 10, 10, 10, 10, 10],
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

// カウント変数を定義
var a = [0, 0, 0, 0, 0, 0];

// ボタンをクリックしたときに呼び出される関数
function count1(buttonIndex) {
  // ボタンのインデックスに対応するカウントを1つ増やす
  a[buttonIndex - 1]++;


  //pointを付ける
  switch (buttonIndex) {
    case 1://ボタン1→5ポイント
      a[0] += 5;
      break;
    case 2://ボタン2→4ポイント
      a[1] += 4;
      break;
    case 3://ボタン3→3ポイント
      a[2] += 3;
      break;
    case 4://ボタン4→2ポイント
      a[3] += 2;
      break;
    case 5://ボタン5→ 1ポイント
      a[4] += 1;
      break;
    default:
      break;
  }

  // チャートを描画
  drawChart1();
}

function drawChart1() {
  myChart1.data.datasets[0].data = a;
  myChart1.update();
}