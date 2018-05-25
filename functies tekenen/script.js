var canvas = document.getElementById('canvas');
var c = canvas.getContext('2d');
var tx = window.innerWidth;
var ty = window.innerHeight;
canvas.width = tx;
canvas.height = ty;

//c.translate(200,0);
var draw = {
    x: tx/2,
    y: ty/2,
    size: 2,
    dx: 0.5,
    dy: 0.5,
    update: function(){
        c.fillRect(this.x - this.size/2, this.y - this.size/2, this.size, this.size);
        this.x += this.dy;
        this.y += this.dy;
        this.dy += this.dx;
    }
};

function animate(){
    requestAnimationFrame(animate);
    draw.update();
}
animate();