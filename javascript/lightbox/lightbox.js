// Get images from DOM
const images = document.querySelectorAll(".image");

// Loop each image
images.forEach(image => {
    image.addEventListener("click", e => {
        const imageSrc = e.target.currentSrc;
        const imageTitle = e.target.alt;
        openLightbox(imageSrc, imageTitle);
    } )
});

function openLightbox(imageSrc, imageTitle) {
    // Crear un nuevo div, donde voy a agregar los elementos
    const lightbox = document.createElement("div");
    lightbox.className = "lightbox";

    // agrego los elementos (img, p, button)
    lightbox.innerHTML = `
        <div class="lightbox__content">
            <img src="${imageSrc}" />
            <p>${imageTitle}</p>
        </div>
        <button id="closeLightbox">X</button>
        <button id="previous"><</button>
        <button id="next">></button>
    `;
    // Añado el lightbox al body (DOM)
    document.body.appendChild(lightbox);

    // Obtengo el boton de cerrar, justo cuando lo he añadido al DOM... para poder agregar un listener

    closeLightBox(lightbox);

}

function closeLightBox(lightbox) {
    const closeLightboxButton = document.getElementById("closeLightbox");

    closeLightboxButton.addEventListener("click", () => {
        // borro el elemento previamente creado.
        lightbox.remove();
    });
}