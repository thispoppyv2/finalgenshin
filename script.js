

function myHamburger() {
    var x = document.getElementById("myTopnav");
    if (x.className === "navlinks") {
        x.className += " responsive";
    } else {
        x.className = "navlinks";
    }
}

window.onload=function(){
    
    const popup = document.getElementById("popup");
    const btn = document.getElementById("popupbtn");
    const btnclose = document.getElementById("popupclosebtn")
    
    btn.addEventListener('click', () => {
        popup.showModal();
        popup.click();
        popup.scrollTo(0,0)
        
    })

    btnclose.addEventListener('click', () => {
        popup.close();

    })

    const popup2 = document.getElementById("popup2");
    const btn2 = document.getElementById("popupbtn2");
    const btnclose2 = document.getElementById("popupclosebtn2")

    btn2.addEventListener('click', () => {
        popup2.showModal();
        popup2.click();
        popup2.scrollTo(0,0)

    })

    btnclose2.addEventListener('click', () => {
        popup2.close();

    })

    const popup3 = document.getElementById("popup3");
    const btn3 = document.getElementById("popupbtn3");
    const btnclose3 = document.getElementById("popupclosebtn3")

    btn3.addEventListener('click', () => {
        popup3.showModal();
        popup3.click();
        popup3.scrollTo(0,0)

    })

    btnclose3.addEventListener('click', () => {
        popup3.close();
    })
    
}




