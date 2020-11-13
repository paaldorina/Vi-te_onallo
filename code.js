function gyok() {
    var valueA = parseFloat(document.getElementById("inputA").value);
    var valueB = parseFloat(document.getElementById("inputB").value);
    var valueC = parseFloat(document.getElementById("inputC").value);
    if (isNaN(valueA) || isNaN(valueB) || isNaN(valueC)) {
        document.getElementById("eredmeny").innerText = "?";
        return;
    }
    var D = Math.pow(valueB, 2) - 4 * valueA * valueC;
    var gyokok_szama = 2;
    if (D < 0) {
        gyokok_szama = 0;
    }
    if (D == 0) {
        gyokok_szama = 1;
    }
    document.getElementById("eredmeny").innerText = gyokok_szama;
}