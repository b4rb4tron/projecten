//
var $ = id => document.getElementById(id);
var htmlX = 0;
var cssX = 0;
var jsX = 0;
var scrollDirection = $("wrapper").getBoundingClientRect().y;
var up;

document.addEventListener("scroll", scrollDingen);

function scrollDingen() {
  //check scrolling up or down
  if ($("wrapper").getBoundingClientRect().y < scrollDirection) {
    scrollDirection = $("wrapper").getBoundingClientRect().y;
    up = false;
  } else {
    up = true;
    scrollDirection = $("wrapper").getBoundingClientRect().y;
  }
  //html balk
  if (
    $("wrapper").getBoundingClientRect().y < 0 &&
    $("groen").getBoundingClientRect().width < 70 &&
    up == false
  ) {
    htmlX += 3;
    $("groen").style.width = htmlX + "px";
  } else if (up == true && $("groen").getBoundingClientRect().width > 0) {
    htmlX -= 3;
    $("groen").style.width = htmlX + "px";
  }
  //css balk
  if (
    $("wrapper").getBoundingClientRect().y < 0 &&
    $("rood").getBoundingClientRect().width < 250 &&
    up == false
  ) {
    cssX += 4;
    $("rood").style.width = cssX + "px";
  } else if ($("rood").getBoundingClientRect().width > 0 && up == true) {
    cssX -= 4;
    $("rood").style.width = cssX + "px";
  }
  //javascript balk
  if (
    $("wrapper").getBoundingClientRect().y < 0 &&
    $("blauw").getBoundingClientRect().width < 200 &&
    up == false
  ) {
    jsX += 5;
    $("blauw").style.width = jsX + "px";
  } else if ($("blauw").getBoundingClientRect().width > 0 && up == true) {
    jsX -= 5;
    $("blauw").style.width = jsX + "px";
  }
  console.log($("left30").getClientRects()) ;
}
