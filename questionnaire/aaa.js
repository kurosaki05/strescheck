var ctx = document.getElementById("radarChart1");
var myChart1 = new Chart(ctx, {
  type: 'radar',
  data: {
    //データの各項目のラベル(上から時計回り)
    labels: [
      "aaa",
      "bbb",
      "ccc",
      "ddd",
    ],
    //データ設定
    datasets: [
      {
        //グラフのデータ(上から時計回り)
        data: [50, 50, 50, 50,],
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

// var counts = [0, 0, 0, 0, 0, 0];
var counts = [0, 0, 0, 0, 0];


// ボタンをクリックしたときに呼び出される関数
function data(buttonIndex) {
  // ボタンのインデックスに対応するカウントを1つ増やす


  // チャートを描画
  drawChart();
}

function drawChart() {

  myChart.data.datasets[0].data = counts;
  myChart.update();
}
