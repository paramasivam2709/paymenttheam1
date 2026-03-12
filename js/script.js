

const mobileBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

mobileBtn.onclick = () => {
    mobileMenu.classList.toggle("hidden");
};


function toggleMobileHome(){

    const menu = document.getElementById("mobile-home-menu");
    const arrow = document.getElementById("home-arrow");

    menu.classList.toggle("hidden");

    arrow.classList.toggle("rotate-180");
}

