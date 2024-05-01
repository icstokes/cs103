
    let age;

    function checkAge() {
        age = document.getElementById("age").value;

        if(isNaN(Number(age))){
            document.getElementById("notification").innerHTML="Give me a number please!"
            document.getElementById("age").value="";
        }

        else if(Number(age)%1 !==0){
            document.getElementById("notification").innerHTML="A WHOLE number please!"
            document.getElementById("age").value="";
        }

        else if (Number(age)>=18){
            document.getElementById("container").style.visibility = "visible";
            document.getElementById("age").value="";
            document.getElementById("notification").innerHTML="";
        }
    }
