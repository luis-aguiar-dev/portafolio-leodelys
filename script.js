document.addEventListener("DOMContentLoaded", function() {
    // Manejo de la galería y el modal
    let fotos = document.querySelectorAll('.gallery-photo img');
    let imagenes = Array.from(fotos).map(img => img.src);
    let modal = document.getElementById("modalGaleria");
    let imagenModal = document.getElementById("imagenModal");
    let cerrarModal = document.getElementsByClassName("modal-close")[0];

    // Mostrar imagen en el modal
    function mostrarImagen(indice) {
        if (indice >= 0 && indice < imagenes.length) {
            imagenModal.src = imagenes[indice];
        }
    }

    // Eventos para cada foto de la galería
    fotos.forEach((foto, indice) => {
        foto.onclick = () => {
            modal.style.display = "block";
            mostrarImagen(indice);
        };
    });

    // Cerrar el modal
    cerrarModal.onclick = () => {
        modal.style.display = "none";
    };

    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
});
