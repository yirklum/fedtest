function turnOnArticles() {
    document.getElementById("bkgboxarticles").style.display= "block";
    document.getElementById("bkboxevents").style.display= "none";
    document.getElementById("articles").style.backgroundColor= "#00ffd5";
    document.getElementById("articles").style.color= "#412396";
    document.getElementById("events").style.backgroundColor= "#412396";
    document.getElementById("events").style.color= "#ffffff";



}

function turnOnEvents() {
    document.getElementById("bkgboxarticles").style.display= "none";
    document.getElementById("bkboxevents").style.display= "block";
    document.getElementById("articles").style.backgroundColor= "#412396";
    document.getElementById("articles").style.color="#ffffff";
    document.getElementById("events").style.backgroundColor= "#00ffd5";
    document.getElementById("events").style.color= "#412396";
}