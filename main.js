document.getElementById("btnWork1").onclick = function() {
    var m = 0;
    var n = 0;
    do {
        m++;
        n = m + n;
    } while (n < 10000);
    document.getElementById('resultWork1').innerHTML = ("Kết quả: ") + (m);
}

// 2. Viết chương trình nhập vào 2 số x, n tính tổng: S(n) = x + x^2
// + x^3 + … + x^n (Sử dụng vòng lặp và hàm)
document.getElementById("btnWork2").onclick = function() {
    var positiveNumbers = document.getElementById("positiveNumbers").value * 1;
    var exponent = document.getElementById("exponent").value * 1;
    var n = 1
    var tong = 0
    var binhphuong = Math.pow(positiveNumbers, exponent);
    do {
        //vong nhay 
        tong = tong + Math.pow(positiveNumbers, n);
        n++;
    } while (n < (exponent + 1));
    document.getElementById('footerCard').innerHTML = ("Kết quả: ") + (tong);

};
// 3. Nhập vào n. Tính giai thừa 1*2*...n
document.getElementById("btnWork3").onclick = function() {
    var positiveNumbers = document.getElementById("txt_Sogiaithua").value * 1;
    var n = 1
    var tong = 1
    do {
        //vong nhay 
        tong = tong * n;
        n++;
    } while (n < (positiveNumbers + 1))

    console.log(n, positiveNumbers, tong)
    document.getElementById('footerCard2').innerHTML = ("Kết quả là:") + (tong);

};
// 4. Hãy viết chương trình khi click vào button sẽ in ra 10 thẻ div.
// Nếu div nào vị trí chẵn thì background màu đỏ và lẻ thì
// background màu xanh

document.getElementById('btnWork4').onclick = function() {
    var blockPosition = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var content = "";
    for (var i = 0; i < blockPosition.length; i++) {
        if (i % 2 === 0) {
            content += "<div class='bg__blue'>" + blockPosition[i] + "</div>";
        } else {
            content += "<div class='bg__red'>" + blockPosition[i] + "</div>";
        }
        document.getElementById("resultWork4").innerHTML = content;
    }
};