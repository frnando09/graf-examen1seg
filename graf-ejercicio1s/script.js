// Obtener la imagen y los botones
/*const image = document.getElementById('image');
const smallBtn = document.getElementById('smallBtn');
const mediumBtn = document.getElementById('mediumBtn');
const largeBtn = document.getElementById('largeBtn');

// Funciones para cambiar el tamaño de la imagen
smallBtn.addEventListener('click', () => {
    image.style.width = '150px';
    image.style.height = '150px';
});

mediumBtn.addEventListener('click', () => {
    image.style.width = '300px';
    image.style.height = '300px';
});

largeBtn.addEventListener('click', () => {
    image.style.width = '450px';
    image.style.height = '450px';
});*/

const image = document.getElementById("image");

document.getElementById("xSmallBtn").addEventListener("click", () => {
    image.style.width = "60px";
});

document.getElementById("smallBtn").addEventListener("click", () => {
    image.style.width = "90px";
});

document.getElementById("mediumBtn").addEventListener("click", () => {
    image.style.width = "120px";
});

document.getElementById("largeBtn").addEventListener("click", () => {
    image.style.width = "160px";
});

document.getElementById("xLargeBtn").addEventListener("click", () => {
    image.style.width = "220px";
});

