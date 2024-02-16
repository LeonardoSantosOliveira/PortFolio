document.addEventListener("DOMContentLoaded", () => {
    const navButtonsMenu = document.querySelectorAll('.nav-link');
    navButtonsMenu.forEach((e) => {
        e.addEventListener('click', fecharMenu);
    })
    
    document.querySelector("#togglerMenuButton").addEventListener('click', abrirMenu);
    document.querySelector("#buttonCloseMenu").addEventListener('click', fecharMenu);
    
    window.addEventListener('scroll', alteraCorNavButton);
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
    const alturaHero = document.querySelector("#hero").clientTop;
    const alturaSobreMim = document.querySelector("#sobreMim").offsetHeight;
    const alturaHabilidades = document.querySelector("#habilidades").offsetHeight;
    const alturaProjetos = document.querySelector("#projetos").offsetHeight;
    const alturaContato = document.querySelector("#contato").offsetHeight;

    
    if (window.scrollY >= alturaHabilidades && window.scrollY <= alturaProjetos) {  
        console.log(alturaHabilidades + ',' + alturaProjetos + ',' )
    }
}