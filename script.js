document.addEventListener("DOMContentLoaded", function() {
    let carrusel = document.getElementById('carrusel');
    let imagenes = carrusel.getElementsByClassName('carrusel-img');
    let indiceActual = 0;

    function desplazarCarrusel(indice) {
        if (indice >= 0 && indice < imagenes.length) {
            carrusel.scrollLeft = imagenes[indice].offsetLeft;
            indiceActual = indice;
        }
    }
});

document.addEventListener("DOMContentLoaded", function() {
    let fotos = document.querySelectorAll('.foto');
    let modal = document.getElementById("modalGaleria");
    let imagenModal = document.getElementById("imagenModal");
    let cerrarModal = document.getElementsByClassName("cerrarModal")[0];

    fotos.forEach(function(foto) {
        foto.onclick = function() {
            modal.style.display = "block";
            imagenModal.src = this.dataset.imagen;
        }
    });

    cerrarModal.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
