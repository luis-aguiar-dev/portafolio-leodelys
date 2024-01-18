document.addEventListener("DOMContentLoaded", function() {
    let fotos = document.querySelectorAll('.gallery-photo img');
    let imagenes = Array.from(fotos).map(img => img.src);
    let modal = document.getElementById("modalGaleria");
    let imagenModal = document.getElementById("imagenModal");
    let cerrarModal = document.getElementsByClassName("modal-close")[0];
    let indiceActual = 0;

    function mostrarImagen(indice) {
        if (indice < 0) {
            indice = 0;
        } else if (indice >= imagenes.length) {
            indice = imagenes.length - 1;
        }
        indiceActual = indice;
        imagenModal.src = imagenes[indice];
    }

    fotos.forEach((foto, indice) => {
        foto.onclick = () => {
            modal.style.display = "block";
            mostrarImagen(indice);
        };
    });

    cerrarModal.onclick = () => {
        modal.style.display = "none";
    };

    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };

    // Navegación con el teclado
    document.onkeydown = (event) => {
        if (modal.style.display === "block") {
            if (event.key === "ArrowLeft") {
                mostrarImagen(indiceActual - 1);
            } else if (event.key === "ArrowRight") {
                mostrarImagen(indiceActual + 1);
            }
        }
    };

    // Gestos táctiles para el modal
    let touchstartX = 0;
    let touchendX = 0;
    const umbralDeslizamiento = 30;

    function handleGesture() {
        if (touchendX + umbralDeslizamiento < touchstartX) mostrarImagen(indiceActual + 1);
        if (touchendX > touchstartX + umbralDeslizamiento) mostrarImagen(indiceActual - 1);
    }

    imagenModal.addEventListener('touchstart', e => {
        touchstartX = e.changedTouches[0].screenX;
    });

    imagenModal.addEventListener('touchend', e => {
        touchendX = e.changedTouches[0].screenX;
        handleGesture();
    });
});
