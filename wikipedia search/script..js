let r = document.getElementById("results");
function submit(e) {
  if (e.keyCode == 13) {
      r.innerHTML= "";
      setTimeout(function() {document.getElementById("searchField").value = "";}, 1000)
;    $.ajax({
      type: "GET",
      url: "https://en.wikipedia.org/w/api.php",
      data: {
        action: "query",
        format: "json",
        prop: "extracts",
        exchars: "200",
        exlimit: "max",
        explaintext: "",
        exintro: "",
        pilimit: "max",
        rawcontinue: "",
        generator: "search",
        gsrsearch: document.getElementById("searchField").value,
        gsrnamespace: "0",
        gsrlimit: "10"
      },
      dataType: "JSONP",
      success: function(response) {
        for (var pageid in response.query.pages) {
            r.innerHTML += "<div class='resultaat' style='margin-top: 5px; transition: 1s;'><a href='http://en.wikipedia.org/?curid=" + [pageid]  + "' target='_blank'> <h4>" + response.query.pages[pageid].title + "</h4><p>" + response.query.pages[pageid].extract + "</p></a></div>";
        }
      }
    });
  }
}


document.getElementById("searchField").addEventListener("keyup", submit);
