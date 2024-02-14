document.addEventListener("DOMContentLoaded", () => {

    document.querySelector("#togglerMenuButton").addEventListener('click', abrirMenu);
    document.querySelector("#buttonCloseMenu").addEventListener('click', fecharMenu);
    
    window.addEventListener('scroll', alteraCorNavButton)
})


const abrirMenu = () => {
    const navMenu = document.querySelector("#navMenu");
    navMenu.classList.remove("hidden")
    navMenu.classList.remove("animate__fadeOutRight");
    navMenu.classList.add("animate__fadeInRight");


}

const fecharMenu = () => {
    const navMenu = document.querySelector("#navMenu");

    navMenu.classList.remove("animate__fadeInRight");
    navMenu.classList.add("animate__fadeOutRight");
};

const alteraCorNavButton = () => { 
    const barraMenu = document.querySelectorAll(".bar");
    
    
}


// 1381 - 2019 / 3681