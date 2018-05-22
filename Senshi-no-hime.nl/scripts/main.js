//globals
var browser = navigator.appVersion;
var klik = 0;
document.addEventListener("scroll", parallax);


//slide menu
function size() {
  document.getElementById("main").style.marginLeft = 300 + "px";
  document.getElementById("slideMenu").style.marginLeft = 300 + "px";
  document.getElementById("ham").style.opacity = 0;
  setTimeout(function() {
    klik = 1;
  }, 1000);
}

function reset() {
  document.getElementById("main").style.marginLeft = 0 + "px";
  document.getElementById("slideMenu").style.marginLeft = 0 + "px";
  document.getElementById("ham").style.opacity = 1;
  klik = 0;
}


//menu wegklikken op pagina
document.addEventListener("mouseup", function() {
  setTimeout(function() {
    if (klik == 1) {
      reset();
    }
  }, 100);
});

//parallax
function parallax() {
  this.bg2 = document.getElementById("bg2").getBoundingClientRect().y;
  document.getElementById("bg2").style.backgroundPositionY =
    10 - this.bg2 / 2 + "px";

  if (
      (browser.includes("Samsung") == 0 || 
      browser.includes("OPR") == 0 )&&
      browser.includes("Android") == 0
      ) {
    this.bg1 = document.getElementById("bg1").getBoundingClientRect().y;
    document.getElementById("bg1").style.backgroundPositionY =
      -(this.bg1 / 2 + 200) + "px";
  }
}

//scroll in page
function topScroll() {
  document.getElementById("boven").scrollIntoView({ behavior: "smooth" });
}
function nieuwsScroll() {
  document.getElementById("nieuws").scrollIntoView({ behavior: "smooth" });
}

function contactScroll() {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}
function overOnsScroll() {
  document.getElementById("overOns").scrollIntoView({ behavior: "smooth" });
}
function fotosScroll() {
  document.getElementById("fotos").scrollIntoView({ behavior: "smooth" });
}


//fuck Android mobile
window.addEventListener("load", function() {
 


  if ((browser.includes("Android") == 1 && browser.includes("OPR") == 1) ||browser.includes("Samsung") == 1 ) {
    document.getElementById("bg1").style.backgroundPositionY = 0 + "px";
  }
  if (browser.includes("Samsung") == 1) {
    document.body.style.width = window.innerWidth;
    document.body.style.height = window.innerHeight;
  }
});

function bedankt(){
document.getElementById("verzenden").innerHTML = "bedankt!";
setTimeout(function(){
  document.getElementById("verzenden").innerHTML = "verzenden";
}, 2000);

}

//caroussel nieuws

 var mySiema = new Siema({
  selector: '.siema1',
   onInit: function(){},
   onChange: function(){}
 });
 
 var prev = document.querySelector('.prev');
 var next = document.querySelector('.next');
 
 prev.addEventListener('click', function () {
   return mySiema.prev();
 });
 next.addEventListener('click', function () {
   return mySiema.next();
 });

 
//caroussel foto's

var myFotos = new Siema({
  selector: '.siema2',  
   loop: 1
 });
 
 var prevF = document.getElementById("fotoLeft");
 var nextF = document.getElementById("fotoRight");
 
 prevF.addEventListener('click', function () {
   return myFotos.prev();
 });
 nextF.addEventListener('click', function () {
   return myFotos.next();
 });