document.addEventListener("DOMContentLoaded", function() {
    // Manejo del carrusel
    let carrusel = document.getElementById('carrusel');
    let imagenes = carrusel.getElementsByClassName('carrusel-img');
    let indiceActual = 0;

    function desplazarCarrusel(indice) {
        if (indice >= 0 && indice < imagenes.length) {
            carrusel.scrollLeft = imagenes[indice].offsetLeft;
            indiceActual = indice;
        }
    }

    // Si hay un problema con la desaparición de la primera imagen en modo responsivo,
    // considera llamar a desplazarCarrusel() aquí para ajustar la posición inicial.

    // Manejo de la galería y el modal
    let fotos = document.querySelectorAll('.foto');
    let modal = document.getElementById("modalGaleria");
    let imagenModal = document.getElementById("imagenModal");
    let cerrarModal = document.getElementsByClassName("cerrarModal")[0];

    fotos.forEach(function(foto) {
        foto.onclick = function() {
            modal.style.display = "block";
            imagenModal.src = this.dataset.imagen;
        };
    });

    cerrarModal.onclick = function() {
        modal.style.display = "none";
    };

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
});