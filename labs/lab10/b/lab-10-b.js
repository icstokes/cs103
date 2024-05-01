let first;
let second;

function addition() {
    first = document.getElementById("input-1").value;
    second = document.getElementById("input-2").value;
    //document.getElementById("input-1").value="";
    //document.getElementById("input-2").value="";
    let result = Number(first) + Number(second);
    document.getElementById("output").innerHTML = String(result);
    if (String(result) < 0) {
        document.getElementById("output").style.color = "red";
    } else {
        document.getElementById("output").style.color = "#E6E6E6";
    }
}

function multiplication() {
    first = document.getElementById("input-1").value;
    second = document.getElementById("input-2").value;
    //document.getElementById("input-1").value="";
    //document.getElementById("input-2").value="";
    let result = Number(first) * Number(second);
    document.getElementById("output").innerHTML = String(result);
    if (String(result) < 0) {
        document.getElementById("output").style.color = "red";
    } else {
        document.getElementById("output").style.color = "#E6E6E6";
    }
}

function subtraction() {
    first = document.getElementById("input-1").value;
    second = document.getElementById("input-2").value;
    //document.getElementById("input-1").value="";
    //document.getElementById("input-2").value="";
    let result = Number(first) - Number(second);
    document.getElementById("output").innerHTML = String(result);
    if (String(result) < 0) {
        document.getElementById("output").style.color = "red";
    } else {
        document.getElementById("output").style.color = "#E6E6E6";
    }
}

function division() {
    first = document.getElementById("input-1").value;
    second = document.getElementById("input-2").value;
    //document.getElementById("input-1").value="";
    //document.getElementById("input-2").value="";
    let result = Number(first) / Number(second);
    document.getElementById("output").innerHTML = String(result);
    if (String(result) < 0) {
        document.getElementById("output").style.color = "red";
    } else {
        document.getElementById("output").style.color = "#E6E6E6";
    }
}

function numberToPower() {
    first = document.getElementById("input-1").value;
    second = document.getElementById("input-2").value;
    let total = 1;
    for (let i = 0; i < Number(second); i++) {
        total = Number(first) * total;
    }
    if (String(total) < 0) {
        document.getElementById("output").style.color = "red";
    } else {
        document.getElementById("output").style.color = "#E6E6E6";
    }
    document.getElementById("output").innerHTML = String(total);
}

function doClear() {
    document.getElementById("input-1").value = "";
    document.getElementById("input-2").value = "";
    document.getElementById("output").innerHTML = "";
}

