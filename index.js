function getEle(id) {
  return document.getElementById(id);
}

//tạo mảng

var listNumber = [];

function themSo() {
  var inputNumber = getEle("inputNumber").value * 1;

  listNumber.push(inputNumber);

  getEle("noti").innerHTML = listNumber;
}

/*---------1. Tổng số dương------------*/

function tongSoDuong() {
  if (listNumber.length === 0) {
    getEle("noti").innerHTML = "Vui lòng nhập số.";
    return;
  }

  var tong = 0;
  var result = "";

  for (var i = 0; i < listNumber.length; i++) {
    var num = listNumber[i];
    if (num > 0) tong += num;
  }
  result = "Tổng số dương là " + tong;
  getEle("noti").innerHTML = result;
}

/*---------2. đếm số dương------------*/
function demSoDuong() {
  if (listNumber.length === 0) {
    getEle("noti").innerHTML = "Vui lòng nhập số.";
    return;
  }

  var dem = 0;
  var result = "";

  for (var i = 0; i < listNumber.length; i++) {
    if (listNumber[i] > 0) {
      dem++;
    }
  }
  result = "Có " + dem + " số dương";
  getEle("noti").innerHTML = result;
}

/*---------3. Tìm số nhỏ nhất------------*/
function soNhoNhat() {
  if (listNumber.length === 0) {
    getEle("noti").innerHTML = "Vui lòng nhập số.";
    return;
  }

  var min = listNumber[0];
  var result = "";

  for (var i = 1; i < listNumber.length; i++) {
    var num = listNumber[i];
    if (min > num) min = num;
  }
  result = "Số nhỏ nhất là: " + min;
  getEle("noti").innerHTML = result;
}

/*---------4. Tìm số dương nhỏ nhất------------*/

function soDuongNhoNhat() {
  if (listNumber.length === 0) {
    getEle("noti").innerHTML = "Vui lòng nhập số.";
    return;
  }

  var result = "";
  var num = listNumber[i];
  var min = 1;

  for (var i = 0; i < listNumber.length; i++) {
    if (num > 0 && min > num) min = num;
  }

  result = "Số dương nhỏ nhất là: " + min;
  getEle("noti").innerHTML = result;
}

/*---------5. Tìm số chẵn cuối cùng trong mảng------------*/
soChan = [];
function soChanCuoiCung() {
  if (listNumber.length === 0) {
    getEle("noti").innerHTML = "Vui lòng nhập số.";
    return;
  }

  var result = "";
  ketQua = -1;

  for (var i = 1; i < listNumber.length; i++) {
    var num = listNumber[i];
    if (num % 2 == 0) {
      soChan.push(num);
      ketQua = soChan[soChan.length - 1];
    }
  }

  if (ketQua === -1) {
    alert("Không tìm thấy số chẵn");
  } else {
    result = "Số chẵn cuối cùng là: " + ketQua;
  }
  getEle("noti").innerHTML = result;
}

/*---------6. Đổi chỗ 2 giá trị------------chưa hoàn thành*/

function doiViTri() {
  if (listNumber.length === 0) {
    getEle("noti").innerHTML = "Vui lòng nhập số.";
    return;
  }
  getEle("pos1").className = "d-block";
  getEle("pos2").className = "d-block";
  getEle("replace").className = "d-block";
}

function change() {
  var pos1 = getEle("pos1").value * 1;
  var pos2 = getEle("pos2").value * 1;

  // Kiểm tra xem vị trí nhập vào có hợp lệ không
  if (
    pos1 < 0 ||
    pos1 > listNumber.length ||
    pos2 < 0 ||
    pos2 > listNumber.length
  ) {
    alert("Vị trí nhập vào không hợp lệ.");
  } else {
    //hoán vị
    var temp = listNumber[pos1];
    listNumber[pos1] = listNumber[pos2];
    listNumber[pos2] = temp;
  }
  result = "Đã hoán đổi vị trí là: " + listNumber;
  getEle("noti").innerHTML = result;
}

/*---------7.Sắp xếp tăng ------------ */

function sapXepTang() {
  if (listNumber.length === 0) {
    getEle("noti").innerHTML = "Vui lòng nhập số.";
    return;
  }

  for (var i = 0; i < listNumber.length - 1; i++) {
    for (var j = i + 1; j < listNumber.length; j++) {
      //hoán vị
      var numI = listNumber[i];
      var numJ = listNumber[j];

      if (numI > numJ) {
        var temp = numI;
        listNumber[i] = numJ;
        listNumber[j] = temp;
      }
    }
  }
  result = "Đã sắp xếp lại là: " + listNumber;
  getEle("noti").innerHTML = result;
}

/*---------8. Tìm số nguyên tố đầu tiên trong mảng------------*/

function timSNT(n) {
  if (n < 2) return false;
  for (var i = 2; i < Math.sqrt(n); i++) if (n % i == 0) return false;
  return true;
}

isPrime = [];

function SNT() {
  if (listNumber.length === 0) {
    getEle("noti").innerHTML = "Vui lòng nhập số.";
    return;
  }

  var result = "";
  ketQua = -1;

  for (var i = 1; i < listNumber.length; i++) {
    var num = listNumber[i];
    if (timSNT(num)) {
      isPrime.push(num);
      ketQua = isPrime[0];
    }
  }

  if (ketQua === -1) {
    alert("Không tìm thấy số nguyên tố");
  } else {
    result = "Số nguyên tố đầu tiên là: " + ketQua;
  }
  getEle("noti").innerHTML = result;
}

/*---------9. mảng có bao nhiêu số nguyên------------*/

function soNguyen() {
  if (listNumber.length === 0) {
    getEle("noti").innerHTML = "Vui lòng nhập số.";
    return;
  }

  var dem = 0;

  for (var i = 0; i <= listNumber.length; i++) {
    var num = listNumber[i];
    if (num > 0 || num < 0) dem++;
  }

  result = "Có " + dem + " số nguyên";
  getEle("noti").innerHTML = result;
}

/*---------10. So sánh số lượng số dương và số lượng số âm ------------*/

function duongAm() {
  if (listNumber.length === 0) {
    getEle("noti").innerHTML = "Vui lòng nhập số.";
    return;
  }

  var demDuong = 0;
  var demAm = 0;

  for (var i = 0; i <= listNumber.length; i++) {
    var num = listNumber[i];
    if (num > 0) demDuong++;
    else if (num < 0) {
      demAm++;
    }
  }

  if (demDuong > demAm) {
    result = "Số lượng số dương lớn hơn số âm ";
  } else if (demDuong < demAm) {
    result = "Số lượng số âm lớn hơn số dương ";
  } else {
    result = "Số lượng số dương bằng số âm ";
  }
  getEle("noti").innerHTML = result;
}
