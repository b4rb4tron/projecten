//slide menu
var klik = 0;
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

//parallax
function parallax() {
  this.bg2 = document.getElementById("bg2").getBoundingClientRect().y;
  document.getElementById("bg2").style.backgroundPositionY =
    10 - this.bg2 / 2 + "px";

  if (browser.includes("Chrome") == 0) {
    this.bg1 = document.getElementById("bg1").getBoundingClientRect().y;
    document.getElementById("bg1").style.backgroundPositionY =
      -(this.bg1 / 5 + 200) + "px";
  }
}

//scroll in page
function topScroll() {
  document.getElementById("boven").scrollIntoView({ behavior: "smooth" });
}
function bottomScroll() {
  document.getElementById("footer").scrollIntoView({ behavior: "smooth" });
}
document.addEventListener("scroll", parallax);

//menu wegklikken op pagina
document.addEventListener("mouseup", function() {
  setTimeout(function() {
    if (klik == 1) {
      reset();
    }
  }, 100);
});

//fuck Android mobile
window.addEventListener("load", function() {
  var browser = navigator.appVersion;

  if (browser.includes("Chrome") == 1) {
    document.getElementById("bg1").style.backgroundPositionY = 0 + "px";
  }
  if (browser.includes("Samsung") == 1) {
    document.body.style.width = window.innerWidth;
    document.body.style.height = window.innerHeight;
  }
  document.getElementById("test").innerHTML = browser;
});
