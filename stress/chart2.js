//グラフ２
var ctx2 = document.getElementById("radarChart2");
var myChart2 = new Chart(ctx2, {
    type: 'radar',
    data: {
        //データの各項目のラベル(上から時計回り)
        labels: ["活気", "イライラ感", "疲労感", "不安感", "抑うつ感", "身体愁訴"],
        //データ設定
        datasets: [
            {
                //グラフのデータ(上から時計回り)
                data: [1, 2, 3, 4, 5, 6],
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
var b = [0, 0, 0, 0, 0, 0];

// ボタンをクリックしたときに呼び出される関数
function count2(buttonIndex) {
    // ボタンのインデックスに対応するカウントを1つ増やす
    b[buttonIndex - 1]++;


    switch (buttonIndex) {
        case 1://ボタン1→5ポイント
            b[0] += 5;
            break;
        case 2://ボタン2→4ポイント
            b[1] += 4;
            break;
        case 3://ボタン3→3ポイント
            b[2] += 3;
            break;
        case 4://ボタン4→2ポイント
            b[3] += 2;
            break;
        case 5://ボタン5→ 1ポイント
            b[4] += 1;
            break;
        default:
            break;
    }
    // チャートを描画
    drawChart2();

}

function drawChart2() {

    myChart2.data.datasets[0].data = b;
    myChart2.update();
}