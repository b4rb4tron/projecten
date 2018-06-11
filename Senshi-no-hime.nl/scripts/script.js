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
    response = this.responseText.split(/ /);
    /*-------------------
    --create pic list---
    ------------------*/
    for (let i = 0; i < response.length; i++) {
      if (response[i].charAt(0) !== "." && response[i].charAt(1) !== "." && response[i].charAt(0) !== "" ) {
        dir.push({title: response[i], id: response[i].slice(0,  response[i].indexOf(`.`))    });
      }
    }
    for(let i = 0; i < dir.length; i++){
      document.querySelector(".fotosSlideShow").innerHTML += `
      <div> 
      <h2>${dir[i].id} </h2>
      <img src="./images/oki/${dir[i].title}" alt="${dir[i].title}" width="80%"  >
      </div> `;
    }
  
    /*-------------------
    --Create slidshow----
    ------------------*/
    var mySiema = new Siema({
      selector: `.Siema2`,
      easing: 'linear',
      loop: true
    });
    /*-------------------
    ------Buttonss-------
    ------------------*/
    document.querySelector('.js-prev').addEventListener('click', function() {Siema2.prev();});
    document.querySelector('.js-next').addEventListener('click', function() {Siema2.next();});
  }
};
request.open("GET", "./scripts/fotos.php", (async = true));
request.send();
