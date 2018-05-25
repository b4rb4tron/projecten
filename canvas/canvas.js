var c = document.getElementById('canvas').getContext('2d'); 
var tx =window.innerWidth;
var ty =window.innerHeight;
canvas.width  = tx;
canvas.height = ty;

//stuff

//c.translate(tx / 2, ty + 300);
function animate()

    {
        c.rotate( Math.PI / 180);   
    requestAnimationFrame(animate);
    c.clearRect(0, 0, tx, ty);
    //floor
    c.beginPath();
    c.lineWidth = 10;
    c.arc(0, 0, 400, 3, 6);
    c.stroke();

        c.beginPath();
        c.moveTo(0, -tx);
        c.lineTo(0, 70);
        c.stroke();
    
    
    
    
}
animate();


//var i = 1;
//var o = 1;

//function animate(){
//        c.clearRect(0, 0, tx, ty);
//    
//
//
//    requestAnimationFrame(animate);   
//    
//    c.rotate(i);      
////draw
//
////floor
//c.beginPath();
//c.lineWidth = 10;
//c.arc(0, 0, 400, 3, 6);
//c.stroke();
//
////sun
//c.beginPath();
//c.lineWidth = 10;
//c.arc(-300,-333,  40, 0, Math.PI * 2);
//c.stroke();
//
//c.save();
//c.translate(tx / 6, ty / 1.5);
//for (var i = 0; i < 10; i++) {
//  c.save();
//  c.rotate(i * 2 * Math.PI / 9);
//  c.beginPath();
//  c.moveTo(0, 50);
//  c.lineTo(0, 70);
//  c.stroke();
//  c.restore();
//}
//c.restore();
////rotate
////c.save();
////c.translate(tx / 2, ty + 300);
////c.rotate(i*o);
////c.restore();
//i += ;
//}
//
//animate();
