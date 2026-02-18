
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

