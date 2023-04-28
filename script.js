var carregando = document.getElementById("carregando")
function inicia() {
    setTimeout(() => {
        carregando.style.display = "none"
        conteudo.style.display = "block"
    }, 1000);
}

var btnAtalho = document.getElementById("btnAtalho")
setInterval(() => {
    btnAtalho.style.animation = "animaBtnAtalho 1s infinite"
    setTimeout(() => {
        btnAtalho.style.animation = "none"
    }, 2000);
}, 3000);

var video = document.getElementById("video")
video.addEventListener('loadedmetadata', function () {
    video.play();
});

var word = document.getElementsByClassName("word")
if (window.matchMedia("(orientation:portrait)").matches) {
    for(let i = 0; i < word.length ; i++) {
        if (i == 0) {
            word[0].addEventListener("click",clique)
        } else if (i == 1) {
            word[1].addEventListener("click",clique)
        }
    }
}
