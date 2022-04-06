const hr = (new Date()).getHours();
const mc1 = document.querySelector(".mc");
const sn1 = document.querySelector(".sn");
const foot1 = document.querySelector("footer");
const ris = document.querySelector(".rinse");

if (hr > 6 && hr < 18) {
    document.body.style.backgroundColor = "beige";
    document.body.style.color = "black";
    mc1.style.color = "dimgrey";
    
    
} else {
    document.body.style.backgroundColor = "dimgrey";
    document.body.style.color = "beige";
    mc1.style.color = "yellow";
    
    
}