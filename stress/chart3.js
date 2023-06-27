//グラフ３
var ctx3 = document.getElementById("radarChart3");
var myChart3 = new Chart(ctx3, {
    type: 'radar',
    data: {
        //データの各項目のラベル(上から時計回り)
        labels: ["上からのサポート", "同僚からのサポート", "家族や友人からのサポート", "仕事や生活の満足度"],
        //データ設定
        datasets: [
            {
                //グラフのデータ(上から時計回り)
                data: [5, 5, 5, 5],
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
var c = [0, 0, 0, 0, 0, 0];

// ボタンをクリックしたときに呼び出される関数
function count3(buttonIndex) {
    // ボタンのインデックスに対応するカウントを1つ増やす
    c[buttonIndex - 1]++;

    //pointを付ける
    switch (buttonIndex) {
        case 1://ボタン1→5ポイント
            c[0] += 5;
            break;
        case 2://ボタン2→4ポイント
            c[1] += 4;
            break;
        case 3://ボタン3→3ポイント
            c[2] += 3;
            break;
        case 4://ボタン4→2ポイント
            c[3] += 2;
            break;
        case 5://ボタン5→ 1ポイント
            c[4] += 1;
            break;
        default:
            break;
    }

    // チャートを描画
    drawChart3();
}

function drawChart3() {

    myChart3.data.datasets[0].data = c;
    myChart3.update();
}