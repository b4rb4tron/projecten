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
  selector: '.Siema1',
   onInit: function(){},
   onChange: function(){},
   draggable: false
 });
 
 var prev = document.querySelector('.prev');
 var next = document.querySelector('.next');
 
 prev.addEventListener('click', function () {
   return mySiema.prev();
 });
 next.addEventListener('click', function () {
   return mySiema.next();
 });

 
 //fotoslider:

 /*-------------------
------Globals-------
------------------*/
var response = [];
var request = new XMLHttpRequest();
let dir = [];
/*-------------------
----AJAX request-----
------------------*/
request.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    response = this.responseText.split(`+++`);
    /*-------------------
    --create pic list---
    ------------------*/
    for (let i = 0; i < response.length; i++) {
      if (response[i].charAt(0) !== "." && response[i].charAt(1) !== "." && response[i].charAt(0) !== "" ) {
        dir.push({title: response[i], id: response[i].slice(0,  response[i].indexOf(`.`))    });
      }
    }
    for(let i = 0; i < dir.length; i++){
      document.querySelector(".Siema2").innerHTML += `
      <div> 
      <h3>${dir[i].id} </h3>
      <img class="fotos" src="./images/slider/${dir[i].title}" alt="${dir[i].title}" width="80%"  >
      </div> `;
    }
  
    /*-------------------
    --Create slidshow----
    ------------------*/
    var Siema2 = new Siema({
      selector: `.Siema2`,
    
      duration: 500,
      loop: true
    });
    /*-------------------
    ------Buttonss-------
    ------------------*/
    document.getElementById('fotoLeft').addEventListener('click', function() {Siema2.prev();});
    document.getElementById('fotoRight').addEventListener('click', function() {Siema2.next();});
  }
};
request.open("GET", "./scripts/fotos.php", (async = true));
request.send();

