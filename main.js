//Bài 1
document.getElementById("btnBai1").onclick = function () {
  var n = 0;
  var tong = 0;
  while (tong < 10000) {
    n++;
    tong += n;
  }
  var ketQua = "Số nguyên dương nhỏ nhất: " + n;
  document.getElementById("footerBai1").innerHTML = ketQua;
  document.getElementById("footerBai1").style.backgroundColor = "lightblue";
};

//Bài 2
function luyThua(a, b) {
  soLuyThua = Math.pow(a, b);
  return soLuyThua;
}
document.getElementById("btnBai2").onclick = function () {
  var x = document.getElementById("number2_1").value;
  var n = document.getElementById("number2_2").value;
  var y = 0;
  var tong = 0;
  while (y < n) {
    y++;
    luyThua(x, y);
    tong += soLuyThua;
  }
  document.getElementById("footerBai2").innerHTML = tong;
  document.getElementById("footerBai2").style.backgroundColor = "lightpink";
};

//Bài 3
document.getElementById("btnBai3").onclick = function () {
  var n = document.getElementById("number3").value;
  var tong = 1;
  for (x = 1; x <= n; x++) {
    tong = tong * x;
  }
  document.getElementById("footerBai3").innerHTML = tong;
  document.getElementById("footerBai3").style.backgroundColor = "lightgreen";
};

//Bài 4
document.getElementById("btnBai4").onclick = function () {
  var x = 0;
  var content = "";
  while (x < 10) {
    x++;
    if (x % 2 === 0) {
      content +=
        "<div style='background-color:brown;height:40px;color:white '>Div chẵn " +
        x +
        "</div>";
    } else {
      content +=
        "<div style='background-color:lightblue;height:40px;color:white '>Div lẻ " +
        x +
        "</div>";
    }
  }
  document.getElementById("footerBai4").innerHTML = content;
};

//Bài 5
function checkSNT(n) {
  var soNT = true;
  if (n < 2) {
    soNT = false;
  } else if (n == 2) {
    soNT = true;
  } else if (n % 2 == 0) {
    soNT = false;
  } else {
    for (var i = 3; i <= Math.sqrt(n); i += 2) {
      if (n % i == 0) {
        soNT = false;
        break;
      }
    }
  }
  return soNT;
}
document.getElementById("btnBai5").onclick = function () {
  var n = document.getElementById("number5").value * 1;
  var content = "";

  for (var o = 0; o <= n; o++) {
    if (checkSNT(o)) {
      content += o + " ";
    }
  }

  document.getElementById("footerBai5").innerHTML = content;
};
