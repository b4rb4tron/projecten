var teller = 0;
var nr2 = 0;
var tellerEt = 0;
window.addEventListener("scroll", function() {

var nr1 = document.getElementById("hoi").style.backgroundPositionY = document.documentElement.scrollTop/10;
document.getElementById("hoi").style.backgroundPositionY = -document.documentElement.scrollTop + "px";
document.getElementById("hoi2").style.backgroundPositionY = -nr1 + "px";
nr2 = document.getElementById("klein").getBoundingClientRect().y;

document.getElementById("klein").style.backgroundPositionY = -nr2/5 + "px";

teller = Math.round(document.getElementById("hoi").getBoundingClientRect().y/-400);
if (teller % 2 != tellerEt ){
    tellerEt = teller % 2;
    document.body.style.backgroundColor = randomColor();
}
console.log((teller % 2));
});

function randomColor() {
return (
'rgb(' +
Math.round(Math.random() * 250) +
',' +
Math.round(Math.random() * 250) +
',' +
Math.round(Math.random() * 250) +

')'
);
} 