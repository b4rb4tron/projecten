window.addEventListener("visibilitychange", function() {
    switch (document.visibilityState) {
        case "hidden":
        document.title ="hidden";
        change_favicon('https://codepad.co/img/icn_logo.png');    
            break;
        case "visible":
        document.title = "visiible";
        change_favicon('http://www.clker.com/cliparts/d/8/o/Y/D/l/favicon-hi.png');
            break;
            default:
            break;
    }});

    function change_favicon(img) {
        var favicon = document.querySelector('link[rel="shortcut icon"]');
        
        if (!favicon) {
            favicon = document.createElement('link');
            favicon.setAttribute('rel', 'shortcut icon');
            var head = document.querySelector('head');
            head.appendChild(favicon);
        }
        
        
        favicon.setAttribute('type', 'image/png');
        favicon.setAttribute('href', img);
    }
    
    