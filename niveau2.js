function age (){

    var j1 = document.getElementById('jour').value;        
    var m1 = document.getElementById('mois').value;
    var a1 = document.getElementById('année').value;

    // VERIFICATION SAISIE

        var j3 = document.getElementById('jour').value;
        if(j3 == "")
        {
            alert("Erreur de saisie");
            return false;
        }
        var m3 = document.getElementById('mois').value;
        if(m3 == "")
        {
            alert("Erreur de saisie");
            return false;
        }
        var a3 = document.getElementById('année').value;
        if(a3 == "")
        {
            alert("Erreur de saisie");
            return false;
        }



    // DATE
    var date =  new Date();
    var j2 = date.getDate();
    var m2 = 1 + date.getMonth();
    var a2 = date.getFullYear();
    var mois = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];


if (j1> j2){
j2 = j2 + mois[m2 - 1];
m2 = m2 - 1;
}
if (m1> m2){
    m2 = m2 + 12;
    a2 = a2 - 1;
    }

    var j= j2 - j1;
    var m= m2 - m1;
    var a= a2 - a1;

    document.getElementById("age").innerHTML = 'Votre age est ' +a+ ' ans ' +m+ ' mois ' +j+ ' jours';



    // CONDITION < 18
    if(a < 18)
    {
       alert("Vous n'êtes pas majeur");
    }
    else
    {
       alert("Bravo! Tu peux accéder à notre site de campagne!");
    }
}



// TOUCHER ENTREE
document.addEventListener('keydown', (event) => {
    var code = event.code;
    if (code === 'Enter') { age();
            }
  }, false);
