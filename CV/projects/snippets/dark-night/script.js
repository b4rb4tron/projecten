   //  ^    ^  \\
  //   O    O   \\  
 //  canvastime  \\
//    |______|    \\

const ctx = document.getElementById("canvas").getContext('2d');
let tx = window.innerWidth;
let ty = window.innerHeight;

/*╲╲╭━━━━━━━━━╮╱╱
  ╲╭╯ ╭━╮┈╭━╮ ╰╮╱
  ╲┃ ┈┃┈┃ ┃┈┃  ┃╱ __
  ╲┃ ┈┗━┛┈┗━┛┈ ┃╱ |
  ╱┃┈┏━━━━━━━┓┈┃╲ |
  ╱┃┈┃┈┈┈ ╭━╮┃┈┃╲
  ╱╰╮╰━━━━┻━┻╯╭╯╲
  ╱╱╰━━━━━━━━━╯╲╲*/

let color = ["#FFD0DD", "#E8C0BE", "#FFE4DD", "#FFE8D0", "#E8CDBE"];
let circle = Array(600).fill(0).map(function(){
    return {
        x: Math.random(),
        y: Math.random(),
        r: Math.random()*5+5,
        c: Math.floor(Math.random()*5),
        xx: ((Math.random()-0.5)/tx),
        yy: ((Math.random()-0.5)/ty)      
    };
});

//    draw!          \\
//              draw! \\
//   draw!             \\

function animate(){    
    //window-resizing
    tx = window.innerWidth;
    ty = window.innerHeight;
    canvas.width = tx;
    canvas.height = ty;  
    //stuff  
    ctx.clearRect(0, 0, tx, ty);
    ctx.globalAlpha = 0.3;
    for (var i=0; i<circle.length;i++){
        //movement
        circle[i].y += circle[i].yy;
        circle[i].x += circle[i].xx;                
        //bouncing  
        if(circle[i].x < 0 || circle[i].x > 1){circle[i].xx = -circle[i].xx;}
        if(circle[i].y < 0 || circle[i].y > 1){circle[i].yy = -circle[i].yy;}
        //drawing 
        ctx.beginPath();
        ctx.fillStyle=color[circle[i].c];
        ctx.arc((circle[i].x * tx), Math.round(circle[i].y * ty), circle[i].r, 0,Math.PI*2);
        ctx.fill();
    }
    //animate!
    requestAnimationFrame(animate);
}

//button & textbox

var x = document.getElementById("dark");
var y = document.getElementById("light");
var z = document.getElementById("box");
var zz = document.getElementById("rand");

//klik for dark background

function klik() {
  //toggle sun-moon
  x.classList.toggle("visible");
  y.classList.toggle("visible");
  //colors
  document.body.style.backgroundColor = "#235";
  z.style.backgroundColor = "#222";
  z.style.color = "#777";
  zz.style.color = "#222";
  //dark-circles
  color=["#010A26", "#304673", "#273859", "#8C8984", "#6D5087"];
}

//klak for light background

function klak() {
  //toggle sun-moon
  y.classList.toggle("visible");
  x.classList.toggle("visible");
  //colors
  document.body.style.backgroundColor = "#9ac";
  z.style.backgroundColor = "#eee";
  z.style.color = "#111";
  zz.style.color = "#eee";
  //light-circles
  color=["#eFD0DD", "#d8C0BE", "#eFE4DD", "#eFE8D0", "#d8CDBE"];
}

//almost forgot :)

animate();