//
let $ = id => document.getElementById(id);
let htmlX = 0;
let cssX = 0;
let jsX = 0;
let scrollDirection = $("wrapper").getBoundingClientRect().y;
let up;
let check = 0;

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
    $("groen").getBoundingClientRect().width <= 170 &&
    up == false
  ) {
    htmlX += 3;
    $("groen").style.width = htmlX + "px";
  } else if (
              up == true && 
              $("groen").getBoundingClientRect().width > 0 &&
              $("groen").getBoundingClientRect().width < 170) {
    htmlX -= 3;
    $("groen").style.width = htmlX + "px";
  }
  //css balk
  if (
    $("wrapper").getBoundingClientRect().y < 0 &&
    $("rood").getBoundingClientRect().width <= 200 &&
    up == false
  ) {
    cssX += 7;
    $("rood").style.width = cssX + "px";
  } else if (
              $("rood").getBoundingClientRect().width > 0 && 
              up == true && 
              $("rood").getBoundingClientRect().width < 200) {
    cssX -= 7;
    $("rood").style.width = cssX + "px";
  }
  //javascript balk
  if (
    $("wrapper").getBoundingClientRect().y < 0 &&
    $("blauw").getBoundingClientRect().width <= 140 &&
    up == false
  ) {
    jsX += 5;
    $("blauw").style.width = jsX + "px";
  } else if (
              $("blauw").getBoundingClientRect().width > 0 && 
              up == true &&
              $("blauw").getBoundingClientRect().width < 140) {
    jsX -= 5;
    $("blauw").style.width = jsX + "px";
  }
  
    //sticky if...
  if($("wrapper").getBoundingClientRect().y < -1000 && 
      check == 0){
    $("left30").style.top = -($("wrapper").getBoundingClientRect().y) + "px";
    $("left30").style.position = "relative";
    check = 1;


  }else if($("wrapper").getBoundingClientRect().y > -1000 &&
            check == 1){

    $("left30").style.position = "sticky";
    $("left30").style.top = "40" + "px";
    check = 0;
  }
}
