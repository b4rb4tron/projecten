console.log("hello world");

var canvas = document.getElementById("canvas");
// @ts-ignore
var c = canvas.getContext("2d");
var ty = window.innerHeight;
var tx = window.innerWidth;

// @ts-ignore
canvas.height = ty;
// @ts-ignore
canvas.width = tx;

//global
var hoi = 0;
var score = 0;
console.log(score);
document.getElementById("teller").innerHTML = "score " + score;
c.fillStyle = "#343434";
c.fillRect(0, 0, tx, ty);


//enemy
//var enemy;
var ec = 0;
var speed = 1;
function Schip() {
  this.x = tx;
  this.y = Math.random() * ty;
  this.size = 40;
  //this.speed = 1;
  this.stop = 0;
}
//stars
var stars = Array(400)
  .fill(0)
  .map(function() {
    return {
      x: Math.random() * tx,
      y: Math.random() * ty,
      size: 2,
      speed: Math.random() / 2,
      start: 0
    };
  });
//stars-start
for (var i = 0; i < stars.length; i++) {
  c.fillStyle = "#ffffff";
  c.fillRect(
    stars[i].x - stars[i].start,
    stars[i].y,
    stars[i].size,
    stars[i].size
  );
}
//ship
var ship = {
  x: 10,
  y: ty / 2,
  size: 10,
  move: 3
};
var img = document.getElementById("schip");
var monster = document.getElementById("enemy");


//vuur
var vuur = [];
var nr = 0;
class kogel {
  constructor(x, y, nr) {
    this.x = x;
    this.y = y;
    this.nr = nr;
    this.speed = 10;
  }
}

function animate() {
 
  c.clearRect(0, 0, tx, ty);
  document.getElementById("teller").innerHTML = "score " + score;

  //bg-color
  c.fillStyle = "#343434";
  c.fillRect(0, 0, tx, ty);

  //stars
  for (var i = 0; i < stars.length; i++) {
    c.fillStyle = "#ffffff";
    c.fillRect(
      stars[i].x - stars[i].start,
      stars[i].y,
      stars[i].size,
      stars[i].size
    );
    stars[i].start += stars[i].speed;
    if (stars[i].x - stars[i].start < -5) {
      stars[i].x = tx + 4;
      stars[i].start = 0;
    }
  }

  // ship
  c.drawImage( img, ship.x, ship.y);
  //c.fillStyle = "blue";
  //c.fillRect(ship.x, ship.y, ship.size, ship.size);

  //ship movement
  window.onkeydown = function(e) {
    var key = e.keyCode ? e.keyCode : e.which;

    if (key == 38 && ship.y > 0) {
      ship.y -= 10;
    } else if (key == 40 && ship.y < ty - ship.size) {
      ship.y += 10;
    } else if (key == 37 && ship.x > 0) {
      ship.x -= 10;
    } else if (key == 39 && ship.x < tx - ship.size) {
      ship.x += 10;
    }
    if (key == 13) {      
      vuur.push( new kogel(ship.x+40, ship.y+23, nr));
      shoot();      
    } 
    console.log(key);
  };
  //enemy
  if (ec == 0) {
    enemy = new Schip();
    ec = 2;
  }
  //c.fillStyle = "#ffffff";
  //c.fillRect(enemy.x, enemy.y, enemy.size, enemy.size);
  c.drawImage(monster,enemy.x, enemy.y);
  enemy.x += -speed;
  
  if(enemy.x > 0-enemy.size){
    requestAnimationFrame(animate);}else{
      document.getElementById("startbox").style.visibility = "visible";
      enemy.x = tx;
      document.getElementById("gamescore").innerHTML = "<br>score "+ score ;
    }
  //end animation
}

function shoot() {
  if (vuur.length > 0) {
    requestAnimationFrame(shoot);
    for (var i = 0; i < vuur.length; i++) {
      c.fillStyle = "#ffffff";
      c.fillRect(vuur[i].x, vuur[i].y, 10, 3);
      vuur[i].x += vuur[i].speed;
      if (vuur[i].x > tx) {
        vuur.splice(i, 1);
        } else
      if (
        vuur[i].x > enemy.x &&
        vuur[i].x < enemy.x + enemy.size &&
        (vuur[i].y > enemy.y && vuur[i].y < enemy.y + enemy.size)
        ) {
        ec = 0;
        speed += 0.5;
        score++;
        console.log(speed);
        vuur.splice(i, 1);
      }
    }
  }
}


document.getElementById("start").onclick = function() {
  score = 0;
  speed = 1;
  document.getElementById("startbox").style.visibility = "hidden";
  requestAnimationFrame(animate);
};
 