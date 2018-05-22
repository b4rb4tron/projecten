//
var wrapper = document.getElementById("wrapper");
var htmlX = 0;
var cssX = 0;
var jsX = 0;
var wrapperY = 0;
var upDown = wrapper.getBoundingClientRect().y;
var scrollBinnen = document.getElementById("wrapper");
document.addEventListener("scroll", scrollDingen);

function scrollDingen() {
  if (wrapper.getBoundingClientRect().y < upDown) {
    upDown = wrapper.getBoundingClientRect().y;
    jsX += 4;
    htmlX += 3;
    cssX += 6;
  } else {
    jsX -= 4;
    htmlX -= 3;
    cssX -= 6;
    upDown = wrapper.getBoundingClientRect().y;
  }
  if (
    wrapper.getBoundingClientRect().y < 0 &&
    document.getElementById("groen").getBoundingClientRect().width < 170
  ) {
    document.getElementById("groen").style.width = htmlX + "px";
  }

  if (
    wrapper.getBoundingClientRect().y < 0 &&
    document.getElementById("rood").getBoundingClientRect().width < 250
  ) {
    document.getElementById("rood").style.width = cssX + "px";
  }

  if (
    wrapper.getBoundingClientRect().y < 0 &&
    document.getElementById("blauw").getBoundingClientRect().width < 200
  ) {
    document.getElementById("blauw").style.width = jsX + "px";
  }

  if( wrapper.getBoundingClientRect().y < -1000){
  
      document.getElementById("left30").style.top = -(wrapperY) + "px";
      document.getElementById("left30").style.position = "relative";
      }else if (wrapper.getBoundingClientRect().y > wrapperY){
        
        document.getElementById("left30").style.top = -(wrapperY) + "px";
      } else {
        console.log(wrapperY);
          wrapperY = wrapper.getBoundingClientRect().y;
  }
}
