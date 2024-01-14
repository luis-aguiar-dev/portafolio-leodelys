document.addEventListener("DOMContentLoaded", function() {
    // Manejo de la galería y el modal
    let fotos = document.querySelectorAll('.gallery-photo img');
    let imagenes = Array.from(fotos).map(img => img.src);
    let indiceActual = 0;
    let modal = document.getElementById("modalGaleria");
    let imagenModal = document.getElementById("imagenModal");
    let cerrarModal = document.getElementsByClassName("modal-close")[0];

    // Mostrar imagen en el modal
    function mostrarImagen(indice) {
        if (indice >= 0 && indice < imagenes.length) {
            imagenModal.src = imagenes[indice];
            indiceActual = indice;
        }
    }

    // Navegación de imágenes
    function siguienteImagen() {
        if (indiceActual < imagenes.length - 1) {
            mostrarImagen(indiceActual + 1);
        }
    }

    function anteriorImagen() {
        if (indiceActual > 0) {
            mostrarImagen(indiceActual - 1);
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

    // Crear y añadir botones de navegación en el modal
    let modalSiguiente = document.createElement("button");
    modalSiguiente.innerHTML = "<i class='fas fa-arrow-right'></i>"; // Ícono de flecha derecha
    modalSiguiente.onclick = siguienteImagen;

    let modalAnterior = document.createElement("button");
    modalAnterior.innerHTML = "<i class='fas fa-arrow-left'></i>"; // Ícono de flecha izquierda
    modalAnterior.onclick = anteriorImagen;

    modal.appendChild(modalAnterior);
    modal.appendChild(modalSiguiente);
});
