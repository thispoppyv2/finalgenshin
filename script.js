function myHamburger() {
    var x = document.getElementById("myTopnav");
    if (x.className === "navlinks") {
        x.className += " responsive";
    } else {
        x.className = "navlinks";
    }
}

function popup() {
    var x = document.getElementById("normalatkpp");
    if (x.className === "popup") {
        x.className += " enable";
    } else {
        x.className = "popup";
    }

    var y = document.getElementById("iconpopup");
    if (y.className === "iconpopup") {
        y.className += " enable";
    } else {
        y.className = "iconpopup";
    }
}

function popup2() {
    var x = document.getElementById("skillpp");
    if (x.className === "popup2") {
        x.className += " enable";
    } else {
        x.className = "popup2";
    }
}

function popup3() {
    var x = document.getElementById("burstpp");
    if (x.className === "popup3") {
        x.className += " enable";
    } else {
        x.className = "popup3";
    }
}





