function newWindow() {
    var newUrl = prompt("What web address would you like to visit?", newUrl);
    var newWin = window;
    var windowOptions = "menubar,location,scrollbars,stats";
    newWin.open("http://" + newUrl, "New URL Window", windowOptions);
    return
}   

function winSize() {
    var newWin = window;
    var windowOptions = "menubar=no,location,scrollbars,stats=yes, top=200, left=200, width=600, height=400";
    var isHttp = false;
    while (!isHttp) {
        var newUrl = prompt("What web address would you like to visit? ex: http://www.example.com", newUrl);
        var toBegin = newUrl.startsWith('http://');
        if (!toBegin) {
            alert("Must start with http://");
        }
        else {
            isHttp = true;
        }
    }
    newWin.open(newUrl, "New URL Window", windowOptions);
}