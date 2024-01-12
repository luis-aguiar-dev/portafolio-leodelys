// Escuchar el evento de carga del DOM para asegurarse de que el HTML esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {

    // Manejo del carrusel
    // Obtiene el contenedor del carrusel por su ID
    let carrusel = document.getElementById('carrusel');

    // Obtiene todas las imágenes dentro del carrusel (con la clase 'carrusel-img')
    let imagenes = carrusel.getElementsByClassName('carrusel-img');

    // Variable para mantener el índice de la imagen actualmente visible en el carrusel
    let indiceActual = 0;

    // Función para desplazar el carrusel a la imagen seleccionada
    function desplazarCarrusel(indice) {
        // Verifica si el índice está dentro del rango de imágenes disponibles
        if (indice >= 0 && indice < imagenes.length) {
            // Desplaza el carrusel horizontalmente para mostrar la imagen seleccionada
            carrusel.scrollLeft = imagenes[indice].offsetLeft;
            // Actualiza el índice actual con el nuevo índice
            indiceActual = indice;
        }
    }

    // Manejo de la galería y el modal
    // Obtiene todas las fotos de la galería por su clase
    let fotos = document.querySelectorAll('.gallery-photo');

    // Obtiene el modal y los elementos relacionados por ID o clase
    let modal = document.getElementById("modalGaleria");
    let imagenModal = document.getElementById("imagenModal");
    let cerrarModal = document.getElementsByClassName("modal-close")[0];

    // Añade un evento de clic a cada foto de la galería
    fotos.forEach(function(foto) {
        foto.onclick = function() {
            // Muestra el modal al hacer clic en una foto
            modal.style.display = "block";
            // Cambia la fuente de la imagen en el modal para que coincida con la imagen seleccionada
            imagenModal.src = this.dataset.imagen;
        };
    });

    // Añade un evento de clic al botón de cierre del modal
    cerrarModal.onclick = function() {
        // Oculta el modal cuando se hace clic en el botón de cierre
        modal.style.display = "none";
    };

    // Cierra el modal al hacer clic fuera de la imagen
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
});