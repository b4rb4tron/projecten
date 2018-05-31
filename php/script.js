var response = [];
var request = new XMLHttpRequest();

request.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    response = this.responseText.split(/ /);
  }
};
request.open("GET", "action.php", (async = false));
request.send();

for (var i = 0; i < response.length; i++) {
  if (response[i].charAt(0) !== "." && response[i].charAt(1) !== "." && response[i].charAt(0) !== "" ) {
    document.getElementById("action").innerHTML += i + " " + response[i] + "<br>";
  }
}

var nr2 = new XMLHttpRequest();

request.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
     document.getElementById("nr2").innerHTML= this.responseText;
  }
};
request.open("GET", response[6], (async = false));
request.send();
