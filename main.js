// Función para abrir el modal
function abrirModal() {
    // Obtener elementos del DOM
    var modal = document.getElementById("myModal");
    var img = document.getElementById("myImg");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
   
    // Mostrar el modal
    modal.style.display = "block";
   
    // Mostrar la imagen dentro del modal
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;
   
    // Agregar evento de clic en el botón de cerrar
    var span = document.getElementsByClassName("close")[0];
    span.onclick = function () {
      modal.style.display = "none";
    };
  }


