function calcScore() {
    var q1 = document.querySelector('input[name="q1"]:checked');
    var q2 = document.querySelector('input[name="q2"]:checked');

    if (q1 && q2) {
      var score = parseInt(q1.value) + parseInt(q2.value);
      document.getElementById("score").innerHTML = score;
      document.querySelector(".result").style.display = "block";
    } else {
      alert("すべての質問に回答してください。");
    }
  }
