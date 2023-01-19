let menuVisible = false;

function mostrarOcultarMenu() {
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

function seleccionar() {
    document.getElementById("nav").classList ="";
    menuVisible = false;
}

function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight = skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progress");
        hablidades[0].classList.add("javascript");
        hablidades[1].classList.add("html-css");
        hablidades[2].classList.add("git-github");
        hablidades[3].classList.add("bootstrap");
        hablidades[4].classList.add("wordpress");
        hablidades[5].classList.add("comunication");
        hablidades[6].classList.add("teamwork");
        hablidades[7].classList.add("creativity");
        hablidades[8].classList.add("dedication");
        hablidades[9].classList.add("proyect-m");
    }
}

window.onscroll = function() {
    efectoHabilidades();
}