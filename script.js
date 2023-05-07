var carregando = document.getElementById("carregando")
function inicia() {
    setTimeout(() => {
        carregando.style.display = "none"
        conteudo.style.display = "block"
    }, 1000);
}

var btnAtalho = document.getElementsByClassName("btnAtalho")
setInterval(() => {
    for (let i = 0; i < btnAtalho.length; i++) {
        btnAtalho[i].style.animation = "animaBtnAtalho 1s infinite"
        setTimeout(() => {
            btnAtalho[i].style.animation = "none"
        }, 2000);
    }
}, 3000);

var video = document.getElementById("video")
video.addEventListener('loadedmetadata', function () {
    video.play();
});

var video = document.querySelector("video");
var section1 = document.getElementById("section1");
var section2 = document.getElementById("section2");
var estadoAtual = "primeira";

function mudarVideo() {
    if (section2.getBoundingClientRect().top - 500 <= 0 && estadoAtual === "primeira") {
        video.src = "brexit-band-video.mp4";
        estadoAtual = "segunda";
    } else if (section1.getBoundingClientRect().bottom - 500 >= 0 && estadoAtual === "segunda") {
        video.src = "brexit-video.mp4";
        estadoAtual = "primeira";
    }
}

window.addEventListener("scroll", mudarVideo);