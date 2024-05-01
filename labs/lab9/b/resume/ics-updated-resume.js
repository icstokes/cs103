
    let age;

    function checkAge() {
        age = document.getElementById("age").value;

       if(Number(age) < 0){
           document.getElementById("container").style.visibility="hidden";
           document.getElementById("notification").style.display="block";
           document.getElementById("notification").innerHTML="Negative numbers are not accepted";
           document.getElementById("age").value="";

       }else if(isNaN(Number(age))){
           document.getElementById("container").style.visibility="hidden";
           document.getElementById("notification").style.display="block";
           document.getElementById("notification").innerHTML="This is not a number!";
           document.getElementById("age").value="";

       }else if(Number(age)%1 !==0){
           document.getElementById("container").style.visibility="hidden";
           document.getElementById("notification").style.display="block";
           document.getElementById("notification").innerHTML="Non-whole numbers are not accepted";
           document.getElementById("age").value="";

       }else if(Number(age) >= 18 && Number(age) <= 120){
           document.getElementById("container").style.visibility="visible";
           document.getElementById("notification").style.display="none";
           document.getElementById("age").value="";

       }else{
           document.getElementById("container").style.visibility="hidden";
           document.getElementById("notification").style.display="block";
           document.getElementById("notification").innerHTML="You are not permitted to see this content";
           document.getElementById("age").value="";

       }

    }
