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
    const alturaHero = document.querySelector("#hero").getBoundingClientRect();
    const alturaSobreMim = document.querySelector("#sobreMim").getBoundingClientRect();
    const alturaHabilidades = document.querySelector("#habilidades").getBoundingClientRect();
    const alturaProjetos = document.querySelector("#projetos").getBoundingClientRect();
    const alturaContato = document.querySelector("#contato").getBoundingClientRect();
    const menuButton = document.querySelectorAll(".bar");

    if (alturaHabilidades.y <= 29 && alturaProjetos.y > 31){
        menuButton.forEach((e) => {
            e.style['background-color'] = '#CCF381';
        })
    } else if (alturaContato.y <= 29) {
        menuButton.forEach((e) => {
            e.style['background-color'] = '#CCF381';
        })
    } else {
        menuButton.forEach((e) => {
            e.style['background-color'] = '#4831D4';
        })
    }
}