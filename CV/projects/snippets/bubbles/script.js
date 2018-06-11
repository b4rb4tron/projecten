//init canvas
var canvas = document.getElementById("canvas");
var c = canvas.getContext("2d");
var tx = window.innerWidth;
var ty = window.innerHeight;
canvas.width = tx;
canvas.height = ty;

//init mouse
var mousex = 0;
var mousey = 0;
addEventListener("mousemove", function() {
  mousex = event.clientX;
  mousey = event.clientY;
});

//random color function & alpha 0
function randomColor() {
  return (
    "rgba(" +
    Math.round(Math.random() * 250) +
    "," +
    Math.round(Math.random() * 250) +
    "," +
    Math.round(Math.random() * 250) +
    "," +
    0 +
    ")"
  );
}

//bubble constructor object
function Ball() {
  this.color = randomColor();
  this.radius = Math.random() * 20 + 14;
  this.startradius = this.radius;
  this.x = Math.random() * (tx - this.radius * 2) + this.radius;
  this.y = Math.random() * (ty - this.radius *2)+ this.radius;
  this.dy = Math.round((Math.random() - 0.5) * 15) /15;
  this.dx = Math.round((Math.random() - 0.5) * 15) /15;
  this.vel = Math.random() / 5;
  //drawfunction in bubble
  this.update = function() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    c.fillStyle = this.color;
    c.fill();
  };
}
//more bubbles
var bal = [];
for (var i = 0; i < 500; i++) {
  bal.push(new Ball());
}

function animate() {
  //resize canvas with window-resize
  if (tx != window.innerWidth || ty != window.innerHeight) {
    tx = window.innerWidth;
    ty = window.innerHeight;
    canvas.width = tx;
    canvas.height = ty;
  }
  //---
  requestAnimationFrame(animate);
  c.clearRect(0, 0, tx, ty);
  
  //drawing & bouncing off walls
  for (var i = 0; i < bal.length; i++) {
    bal[i].update();
    bal[i].y += bal[i].dy;
    bal[i].x += bal[i].dx;
    if (bal[i].y + bal[i].radius >= ty || bal[i].y - bal[i].radius < 0) {
      bal[i].dy = -bal[i].dy ;
    }
    if (bal[i].x + bal[i].radius > tx || bal[i].x - bal[i].radius < 0) {
      bal[i].dx = -bal[i].dx;
    }
    
    //alpha manipulation
    var kleur = bal[i].color.split(",");
    kleur[3] = Number(kleur[3].slice(0,kleur[3].length-1));
    if (
      mousex >= bal[i].x - 50 &&
      mousex <= bal[i].x + 50 &&
      mousey >= bal[i].y - 50 &&
      mousey <= bal[i].y + 50 &&
      kleur[3] < 0.8 ){
      kleur[3]+= 0.05;
    } else if (kleur[3] > 0){kleur[3]+= -0.005; } else {kleur[3] = 0}
    bal[i].color = kleur[0] + "," + kleur[1] + "," + kleur[2] + "," + kleur[3] + ")";
  }
  //animation end
}

requestAnimationFrame(animate);
