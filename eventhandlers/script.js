console.log("Hello World");
const ctx = document.getElementById("canvas");
const c = ctx.getContext("2d");
let ty = window.innerHeight;
let tx = window.innerWidth;
ctx.width = tx;
ctx.height = ty;
//--------------------------------

let size = 100
let ship = {
    size: size,
    x: 0,
    y: ty/2-size/2,
    speed: 2
}
let fire = {
    lenght: 20,
    width: 5,
    speed: 5,
    start: 0,
    x: ship.x+ship.size,
    y: ship.y+(ship.size/2)
}
 
c.fillRect(ship.x, ship.y, ship.size, ship.size);
function animate(){    
    if (fire.start < tx){
        requestAnimationFrame(animate);
    } else {
        fire.start = 0;
    } 
    
    c.fillRect(fire.x+fire.start, fire.y, fire.lenght, fire.width);
    fire.start += fire.speed;
    c.clearRect(ship.size, fire.y, fire.lenght+fire.start, fire.width);

}
window.addEventListener("mouseup", start);

function start(){
    requestAnimationFrame(animate);    
}

//cancelAnimationFrame(cancel);





//let sx = 0;
//let sy = 2;
//let size = 100;
//let score = 0;
//let yp = 0;
//let ys = 0.04;
//let hy = 0;
//let ss = 0;
//let ssy = 90;
//
//function animate() {
//  hy = 50 * Math.sin(yp);
//  c.clearRect(0, 0, tx, ty);
//  c.fillRect(sx, ty / 4 + hy+ss, size, size);
//  requestAnimationFrame(animate);
//  sx += sy;
//  yp += ys;
//  hy += ssy;
//  if (ty / 4 + hy+ss > ty - size || ty / 4 + hy+ss < 0) {
//    ssy = -ssy;
//    ss = 0;
//  }
//  if (sx > tx - size || sx < 0) {
//    sy = -sy;
//  }  
//}
//
//let xm, ym;
//function showCoords(event) {
//  xm = event.clientX;
//  ym = event.clientY;
//}
//
//window.addEventListener("mousemove", showCoords);
//window.addEventListener("mousedown", klik);
//function klik() {
//  if (
//    xm > sx &&
//    xm < sx + size &&
//    (ym > ty / 4 + hy && ym < ty / 4 + hy + size)
//  ) {
//    size += -5;
//    score += 1;
//    document.getElementById("score").innerHTML = score;
//  } else {
//    size += +5;
//    score += -1;
//    document.getElementById("score").innerHTML = score;
//  }
//  if (size <= 10) {
//    document.getElementById("score").innerHTML = "klein he";
//  }
//}
//
//animate();
//