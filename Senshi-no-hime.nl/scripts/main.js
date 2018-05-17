
function size(){
document.getElementById("main").style.marginLeft = 400 + "px";
document.getElementById("slideMenu").style.marginLeft = 400 + "px";
document.getElementById("ham").style.opacity = 0;
}


function reset(){
    document.getElementById("main").style.marginLeft = 0 + "px";
    document.getElementById("slideMenu").style.marginLeft = 0 + "px";
    document.getElementById("ham").style.opacity = 1;
    }

tx = window.innerWidth;
ty = window.innerHeight;
let bg1;
function parallax() {
    
    this.bg2 = document.getElementById("bg2").getBoundingClientRect().y;
    document.getElementById("bg2").style.backgroundPositionY =  300 + (bg2*1.5) + "px";

    bg1 = document.getElementById("bg1").getBoundingClientRect().y;
    document.getElementById("bg1").style.backgroundPositionY = -(bg1/5 + 200) + "px";
}
window.addEventListener("scroll", parallax);