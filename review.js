let counter = 0;

function divisibleCounter() {
    counter = counter + 1
    if (counter % 5 === 0) {
        console.log("Isabelle");
    }
}

function showValue() {
    let input = document.getElementById("input").value;

    document.getElementById("output").innerHTML = `
<h1>${input}</h1>
`
}

let bool = true;

function showOpinion() {
    if (bool === true) {
        document.getElementById("message").style.visibility = "visible";
    }
    bool = false;
else
    {
        document.getElementById("message").style.visibility = "hidden";
    }
}