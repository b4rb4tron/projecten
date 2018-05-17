//prerequisites

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
var tx = window.innerWidth
var ty = window.innerHeight;
canvas.width = tx;
canvas.height = ty;

//stuff
let xxx = 10;
const color = ["green", "orange", "blue", "red"];
const pi = Math.PI;

const circle = Array(50).fill(0).map(function(){
    return {
        x: Math.random(),
        y: Math.random(),
        r: Math.random()*5+5,
        c: Math.floor(Math.random()*4),
        xx: ((Math.random()-0.5)/tx),
        yy: ((Math.random())/ty)*1.5      
    }
});
var hoi;
//drawing

function animate(){
    tx = window.innerWidth;
    ty = window.innerHeight;
    canvas.width = tx;
    canvas.height = ty;  
    ctx.clearRect(0, 0, tx, ty);
    for (var i=0; i<circle.length;i++){
        circle[i].y += circle[i].yy;
        circle[i].x += circle[i].xx;                
        if(circle[i].x < 0 || circle[i].x > 1){circle[i].xx = -circle[i].xx}
        if(circle[i].y > 1 ){circle[i].y = 0}
        ctx.beginPath();
        ctx.strokeStyle=color[circle[i].c];
        ctx.arc((circle[i].x * tx), Math.round(circle[i].y * ty), circle[i].r+5, 0,pi*2);
        ctx.stroke();
        //eventlisteners
        var cx = circle[i].x*tx;
        var cr = circle[i].r;
        document.body.onmousemove = function(event) {
            if(event.clientX < cx+50 && event.clientX > cx-50){
            cr +=5;
            console.log(cr)
            }
        };
    
    }    
    requestAnimationFrame(animate)
}
animate();