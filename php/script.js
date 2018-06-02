/*-------------------
------Globals-------
------------------*/
var response = [];
var request = new XMLHttpRequest();
let dir = [];
let id=0;
/*-------------------
----AJAX request-----
------------------*/
request.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    response = this.responseText.split(/ /);
  }
};
request.open("GET", "action.php", (async = false));
request.send();
/*-------------------
--create pic list---
------------------*/
for (var i = 0; i < response.length; i++) {
  if (response[i].charAt(0) !== "." && response[i].charAt(1) !== "." && response[i].charAt(0) !== "" ) {
    id+=1;
    dir.push({title: response[i], id: id});
  }
}
for(var i = 0; i < dir.length; i++){
  document.querySelector(".mySiema").innerHTML += `
  <div> <img src="./jpg/${dir[i].title}" alt="${dir[i].title}" ></div> `;
}
/*-------------------
--Create slidshow----
------------------*/
var mySiema = new Siema({
  selector: `.mySiema`,
  easing: 'linear',
  loop: true
});
/*-------------------
------Buttonss-------
------------------*/
document.querySelector('.js-prev').addEventListener('click', function() {mySiema.prev();});
document.querySelector('.js-next').addEventListener('click', function() {mySiema.next();});