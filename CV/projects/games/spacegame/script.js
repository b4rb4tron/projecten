//++++++++++++++++++++++globals++++++++++++++++++

var canvas = document.getElementById('canvas');
var c = canvas.getContext('2d');
var tx = (window.innerWidth);
var ty = (window.innerHeight);
canvas.width = tx/100*79;
canvas.height = ty/100*79;

var mouse=[];

addEventListener("mousemove", function(event) {
    mouse.x = event.clientX-tx/7.9;
    mouse.y = event.clientY-ty/7.9;
});

//++++++++++++=audio+++++++++++++++++=

var audio = new Audio();
audio.src = "https://ia801604.us.archive.org/0/items/78_the-happy-monster_chubby-jackson-and-his-orchestra-jackson-bauer_gbia0005336b/The%20Happy%20Monster%20-%20Chubby%20Jackson%20and%20his%20Orchestra.mp3";

//++++++++++++++++++++++counters+++++++++++++++++
var score = 0;
var stop = 0;
var ss = new Date();
var ns = ss.valueOf();
var count;

//++++++++++++++++++++++vuur+++++++++++++++++++++

var kogelDX = 10;
var kogelLength = 10;
var kogelWidth = 4;
var kogelCount;

function Kogel() {
    this.x = ship.x+shipX;
    this.y = ship.y+shipY/2;
    this.dx = kogelDX;
    this.length = kogelLength;
    this.width = kogelWidth;
    this.update = function update() {
        c.fillStyle = "red";
        c.fillRect(this.x, this.y, this.length, this.width);

    };
}

var vuur = [];
function addKogel(){
    vuur.push(new Kogel());
}

addEventListener("keyup",addKogel);

//++++++++++++++++++++++ship+++++++++++++++++++++

var recht = new Image();    
var onder = new Image();
var boven = new Image();
onder.src = "https://raw.githubusercontent.com/b4rb4tron/js-spacegame/master/schip/schip-50x50-recht.png";
recht.src = "https://raw.githubusercontent.com/b4rb4tron/js-spacegame/master/schip/schip-50x50-recht.png";
boven.src = "https://raw.githubusercontent.com/b4rb4tron/js-spacegame/master/schip/schip-50x50-recht.png";

var shipX = 50;
var shipY = 50;
var ship = {
    sl: shipX,
    sw: shipY,
    x: tx/4,
    y:  ty/2 - (shipY/2),
    dx: 5,
    dy: 5,
    img: recht,
    update: function(){
        c.drawImage(ship.img, ship.x, ship.y);
    }
};

//+++++++++++++++++++++enemy+++++++++++++++++++++
var enemyY = 40;
var enemyX = 40;
var enemyCount;

var enemyImg = new Image();
var enemyClear = new Image();
var enemyDx = 7;
var enemySpawn = 1000;
enemyImg.src = "https://raw.githubusercontent.com/b4rb4tron/js-spacegame/master/schip/enemy.png";

function Enemy(){
    this.eX = enemyX;
    this.eY = enemyY;
    this.x = canvas.width;
    this.y = Math.random()*(canvas.height-enemyY*2)+enemyY;
    this.dx = (Math.random()*5)-enemyDx;
    this.dy = Math.sin(Math.round(Math.random()*360)*10);
    this.img = enemyImg;
    this.update = function(){
        c.drawImage(this.img,this.x, this.y);
        this.x += this.dx;
        this.y += this.dy + ((Math.sin(this.x/(this.dx*10)))*(this.dy*10));
    };
}
var enemy = [];
setTimeout(function() {
    setInterval( function(){
        enemy.push(new Enemy());
        }, 700);
}, 2000);
//+++++++++++++++++++++animate ++++++++++++++++++

function animate(){
    
    c.clearRect(0,0,tx,ty);
    var s = new Date();
    var n = s.valueOf() ;
count = Math.floor((n-ns)/1000);
enemyCount = 1;
if ( score == 20 || score == 40){
    enemy.push(new Enemy());
    enemyCount ++;
}
if ( score > 50 && score < 60 ){
    enemy.push(new Enemy());
    enemyCount ++;
}
if ( score > 100 && score < 150 ){
    enemy.push(new Enemy());
    enemyCount ++;
}
if ( score > 200 ){
    enemy.push(new Enemy());
    enemyCount ++;
}


    //----ship------
    ship.update();
    //movement
    if(ship.x + shipX < mouse.x && ship.x < canvas.width - shipX){
        ship.x += ship.dx;
    } else if(ship.x >= mouse.x && ship.x > 0){
        ship.x += -ship.dx; 
    }
    if(ship.y + shipY <= mouse.y && ship.y < canvas.height - shipY){
        ship.y += ship.dy;
        ship.img = boven;
    } else if(ship.y > mouse.y && ship.y > 0){
        ship.y += -ship.dy;
        ship.img = onder;
    }else{
        ship.img = recht;
    }
    
    //kogels:
   
    for(var i=0; i< vuur.length; i++){
        vuur[i].update();
        vuur[i].x += vuur[i].dx; 
        
                if(vuur[i].x > tx){
                    vuur.splice(i,1);
                }
            }
    //enemy:
    for (i=0; i< enemy.length;i++){
        enemy[i].update();
        if( ship.x + ship.sl -20 >  enemy[i].x && 
            ship.x < enemy[i].x + enemy[i].eX -20 &&  
            ship.y < enemy[i].y + enemy[i].eY -20 &&
            ship.y + ship.sw -20 > enemy[i].y &&
            enemy[i].eY > 0
        ){
                stop = 1;
            }
        for(var j =0; j< vuur.length; j++){
            if (vuur.length > 0 || enemy.length > 0){
                if( vuur[j].x > enemy[i].x &&
                    vuur[j].x < enemy[i].x + enemy[i].eX &&
                    vuur[j].y > enemy[i].y &&
                    vuur[j].y < enemy[i].y + enemy[i].eY){
                        enemy[i].img = enemyClear;
                        enemy[i].eY = -1;
                        enemy[i].eX = -1;
                        score += 1;
                        vuur.splice(j,1);
                    }
                }
            }                    
        }
    for(i=0; i< enemy.length;i++){
        if(enemy[i].x + enemyX - enemy[i].dx < -100){
            enemy.splice(i,1);
        }
    }
   if(stop == 1){
      audio.pause();
     document.getElementById("startbox").style.visibility = "visible";
      document.getElementById("gamescore").innerHTML = "<br>score "+ score ;
     stop =0;
    }else{
                        requestAnimationFrame(animate);
                         }
  
   document.getElementById("score").innerHTML= "score "+ score;
}

//++++++++++++++begin game+++++++++++++++++


document.getElementById("start").onclick = function() {
  score = 0;
  stop = 0;
  enemy = [];
  vuur = [];
  audio.load();
  document.getElementById("startbox").style.visibility = "hidden";
  requestAnimationFrame(animate);
  audio.play();
};