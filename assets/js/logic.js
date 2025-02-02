function newWindow() {
    var newUrl = prompt("What web address would you like to visit?", newUrl);
    var newWin = window;
    var windowOptions = "menubar,location,scrollbars,stats"
    newWin.open("http://" + newUrl, "New URL Window", windowOptions);
    return
}   