function myHamburger() {
    var x = document.getElementById("myTopnav");
    if (x.className === "navlinks") {
        x.className += " responsive";
    } else {
        x.className = "navlinks";
    }
}