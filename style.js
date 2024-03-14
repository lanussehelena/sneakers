const galeria = document.querySelectorAll(".fotos-produto li img");

function galeriaTrocar(event) {
    const principal = document.querySelector(".img-principal");
    const clicada = event.currentTarget;
    principal.src = clicada.src;
}

function galeriaClique(imagem) {
    imagem.addEventListener("click", galeriaTrocar);
}

galeria.forEach(galeriaClique);