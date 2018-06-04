function ajax(input){
    let xhr = new XMLHttpRequest();
    xhr.open(`get`,input);
    xhr.onreadystatechange = function(){document.getElementById("ajax").innerHTML= xhr.response;};
    xhr.send();
    
}