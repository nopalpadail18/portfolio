// Hamburger

const hamburger = document.querySelector("#hamburger");
const navItem = document.querySelector("#nav-item");

hamburger .addEventListener("click", function() {
    hamburger.classList.toggle("hamburger-active");
    navItem.classList.toggle("hidden");
    
});

// Navbar
window.onscroll = function() {
    const header = document.querySelector("header");
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav){
        header.classList.add("navbar-fixed");
    }else{
        header.classList.remove("navbar-fixed");
    }
}