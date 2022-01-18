function changeColor(color) {
    document.body.style.background = color;
}





function recup(click_id) {
    let a = parseFloat(document.getElementById('input1').value);
    let b = parseFloat(document.getElementById('input2').value);

    if (click_id == "add") {
        funct3(a, b);
    } else if (click_id == "multi") {
        funct3b(a, b);
    } else if (click_id == "divi") {
        funct3c(a, b);
    } else if (click_id == "soust") {
        funct3d(a, b);
    } else {}

}

// fonctions calcul + * / -

function funct3(x, y) {
    // add
    document.getElementById('result').value = (x + y);

}

function funct3b(x, y) {
    // multipli
    document.getElementById('result').value = (x * y);

}

function funct3c(x, y) {
    // divise
    document.getElementById('result').value = (x / y);

}

function funct3d(x, y) {
    // soustrait
    document.getElementById('result').value = (x - y);

}


// fonction 1/2 sapin et sapin
function funct4(x, y) {

    for (i = 1; i <= x; i++) {
        for (j = 1; j <= i; j++) {
            document.write(y);
        }
        document.write("<br>");
    }
}

function funct5(num, motif) {
    let i, j, k;
    k = num - 1;
    for (i = 1; i <= num; i++) {
        for (j = 1; j <= k; j++) {
            document.write(" ");
        }
        for (j = 1; j <= 2 * i - 1; j++) {
            document.write(motif);
        }
        document.write("<br>");
        k--;
    }
}