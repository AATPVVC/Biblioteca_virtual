//Contador
function compras(idElemento) {
  let contador = document.querySelector(idElemento);
  let numeroActual = parseInt(contador.innerText);
  contador.innerText = numeroActual + 1;
}
//Cambio imagen
const galleryImg = document.getElementById("imagen-Grandota");


const originalImageSrc = "static/video/primerVideo.mp4";
const hoverImageSrc = "static/video/segundoVideo.mp4";



galleryImg.addEventListener("mouseover", () => {
  galleryImg.src = hoverImageSrc;
  
});

galleryImg.addEventListener("mouseout", () => {
  galleryImg.src = originalImageSrc;
  
});