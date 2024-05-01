let first;
let second;

function addition(){
    first=document.getElementById("input-1").value;
    second=document.getElementById("input-2").value;
    //document.getElementById("input-1").value="";
    //document.getElementById("input-2").value="";
    let result = Number(first)+Number(second);
    document.getElementById("output").innerHTML=String(result);
}
function multiplication(){
    first=document.getElementById("input-1").value;
    second=document.getElementById("input-2").value;
    //document.getElementById("input-1").value="";
    //document.getElementById("input-2").value="";
    let result = Number(first)*Number(second);
    document.getElementById("output").innerHTML=String(result);
}
function subtraction(){
    first=document.getElementById("input-1").value;
    second=document.getElementById("input-2").value;
    //document.getElementById("input-1").value="";
    //document.getElementById("input-2").value="";
    let result = Number(first)-Number(second);
    document.getElementById("output").innerHTML=String(result);
}
function division(){
    first=document.getElementById("input-1").value;
    second=document.getElementById("input-2").value;
    //document.getElementById("input-1").value="";
    //document.getElementById("input-2").value="";
    let result = Number(first)/Number(second);
    document.getElementById("output").innerHTML=String(result);
}