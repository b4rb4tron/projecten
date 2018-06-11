id = elementId => document.getElementById(elementId);

// Load site content 
meat = (target, title) => {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.title = title;
            id("meat").innerHTML= this.response;
            requestAnimationFrame(anim);
        
        }
      };
      xhr.open("get", target, true);
      xhr.setRequestHeader('Content-type', 'text/html');
      xhr.setRequestHeader("Cache-Control", "no-cache");
      xhr.setRequestHeader("Pragma", "no-cache");
      xhr.send();    
    };

//load welcome page    
meat('hi.html', 'Portfolio');

//mobile menu
slideMenu = () => {
    id("hamburger").style.opacity= 0;
    id("sideNav").style.marginLeft= 0 + "%";

setTimeout(()=>  {id("closeButton").style.opacity= ".5"; 
id("closeButton").style.visibility= "visible";}, 500);   

};
slideBack = () => {
    id("hamburger").style.opacity= ".5";
    id("closeButton").style.visibility= "hidden";
    id("closeButton").style.opacity= 0;
   setTimeout(()=> id("sideNav").style.marginLeft= -110 + "%", 200) ;
};

//goodies
id("hamburger").addEventListener("mouseover", () => id("hamburger").style.opacity= ".9");
id("closeButton").addEventListener("mouseover", () => id("closeButton").style.opacity= ".9");
id("hamburger").addEventListener("mouseleave", () => id("hamburger").style.opacity= ".5");
id("closeButton").addEventListener("mouseleave", () => id("closeButton").style.opacity= ".5");

//slide in on  click
let all = document.querySelectorAll(".item").length;
timeout = () => setTimeout(slideBack, 200);
for (let i=0; i< all; i++ ){
    document.querySelectorAll(".item").item(i).addEventListener("mouseup",timeout);
}

//hi.html

rnd = () => {
    let d = new Date();
    return d.getSeconds() + d.getMilliseconds() ;
};

exp = () => {

 document.getElementById("experience").innerHTML= `<h1>with <span style="
                                                                        color: orange; 
                                                                        display: inline-block; 
                                                                        width: 2.2em;
                                                                        text-align: center;">${rnd()}</span> years of experience</h1>`;
};

anim = () => {
if (document.title == "Portfolio" || document.title == "hi!"){
    setTimeout(exp, 700 );
    setTimeout(anim, 700);
}
};
requestAnimationFrame(anim);

//footer
footer = () => {
let d = new Date();
let year = d.getFullYear();
id("year").innerHTML= "&copy; " + year ; 
};
footer();
