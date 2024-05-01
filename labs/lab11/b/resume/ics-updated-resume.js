
let age;
function checkAge() {
    age = document.getElementById("age").value;

    if (Number(age) < 0) {
        document.getElementById("container").style.visibility = "hidden";
        document.getElementById("notification").style.display = "block";
        document.getElementById("notification").innerHTML = "Negative numbers are not accepted";
        document.getElementById("age").value = "";

    } else if (isNaN(Number(age))) {
        document.getElementById("container").style.visibility = "hidden";
        document.getElementById("notification").style.display = "block";
        document.getElementById("notification").innerHTML = "This is not a number!";
        document.getElementById("age").value = "";

    } else if (Number(age) % 1 !== 0) {
        document.getElementById("container").style.visibility = "hidden";
        document.getElementById("notification").style.display = "block";
        document.getElementById("notification").innerHTML = "Non-whole numbers are not accepted";
        document.getElementById("age").value = "";

    } else if (Number(age) >= 18 && Number(age) <= 120) {
        document.getElementById("container").style.visibility = "visible";
        document.getElementById("notification").style.display = "none";
        document.getElementById("age").value = "";

    } else {
        document.getElementById("container").style.visibility = "hidden";
        document.getElementById("notification").style.display = "block";
        document.getElementById("notification").innerHTML = "You are not permitted to see this content";
        document.getElementById("age").value = "";

    }

}

let today = new Date();

let day = today.getDate();
let month = today.getMonth() + 1;
let year = today.getFullYear();

day = day < 10 ? '0' + day : day;
month = month < 10 ? '0' + month : month;

let hours = today.getHours();
let minutes = today.getMinutes();
const ampm = hours >= 12 ? 'PM' : 'AM';

hours= hours % 12;
hours = hours ? hours : 12;
minutes = minutes < 10 ? '0' + minutes : minutes;
let time = hours + ":" + minutes + " " + ampm;


document.getElementById("time-date").innerHTML=
    `
    <h3>${time}</h3>
    <h5>${day + "/" + month + "/" + year}</h5>
    `
;
