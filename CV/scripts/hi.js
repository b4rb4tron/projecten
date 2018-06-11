
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
    setTimeout(exp, 500 );
    setTimeout(anim, 400);
};
requestAnimationFrame(anim);

//footer
footer = () => {
    let d = new Date();
    let year = d.getFullYear();
    id("year").innerHTML= "&copy; " + year ; 
    };
    footer();
    