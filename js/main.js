const d = document;
const w = window;

function carga(){
    const loader = d.getElementById("content-loader")
    loader.style.visibility = 'hidden';
    loader.style.opacity = '0';
}

function quitarMenu(){
    const links = d.getElementsByClassName("screen-menu");
    const btnMenu = d.getElementById("btn-menu");
    
    for(let i = 0; i < links.length; i++){
        links[i].addEventListener("click", function(){
            btnMenu.checked = false;
        });
    }
}

d.addEventListener("DOMContentLoaded", (e) =>{
    quitarMenu();
});

w.onload = carga;
