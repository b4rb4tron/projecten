let klik = 0;
//submit = () => document.getElementById("hoi").innerHTML = document.getElementById("searchField").value;
function submit(e) { if (e.keyCode == 13){
    document.getElementById("hoi").innerHTML = document.getElementById("searchField").value;
}
}
document.getElementById("searchField").addEventListener("keyup", submit );

