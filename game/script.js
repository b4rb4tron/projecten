var tx = window.innerWidth;
var ty = window.innerHeight;

if(typeof Phaser == `undefined`){const Phaser = require(`phaser`);}

var config = {
    type: Phaser.AUTO,
    width: tx,
    height: ty,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 1400 }
        }
    },
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.setBaseURL('http://labs.phaser.io');

    this.load.image('sky', 'assets/skies/space3.png');
    this.load.image('ground', 'assets/sprites/phaser3-logo.png');
    this.load.image('red', 'assets/particles/red.png');
}

function create ()
{
    platforms = this.physics.add.staticGroup();
    platforms.create(600, 400, 'ground');
    platforms.create(150, ty-50, 'ground');
    platforms.create(tx-100, 220, 'ground');
 
 
    var logo = this.physics.add.image(100, 100, 'red');
    this.physics.add.collider(logo, platforms);
    logo.setVelocity(400, 500);
    logo.setBounce(1, 1);
    logo.setCollideWorldBounds(true);   

}