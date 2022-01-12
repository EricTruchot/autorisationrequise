// NIVEAU 1

function age(){
    let age;
    age = document.getElementById("age").value;
    console.log("age = " + age);
    if(age < 18)
    {
       alert("Vous n'êtes pas majeur");
    }
    else
    {
       alert("Vous êtes majeur");
    }
    
}