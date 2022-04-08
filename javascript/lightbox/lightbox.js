// Get images from DOM
const images = document.querySelectorAll(".image");

// Loop each image
images.forEach((image, index) => {
    image.addEventListener("click", e => {
        const imageSrc = e.target.currentSrc;
        const imageTitle = e.target.alt;
        const currentIndex = index;
        openLightbox(currentIndex, imageSrc, imageTitle);
    } )
});

function openLightbox(currentIndex, imageSrc, imageTitle) {
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
    
    const previousButton = lightbox.querySelector("#previous");
    const nextButton = lightbox.querySelector("#next");
    
    previousButton.addEventListener("click", () => {
        // valido el indice del element, si es menor que 0, el indice sera el ultimo elemento del arreglo (images.length - 1)
        // si no, seguira restando -1 a cada indice.
        const newIndex = (currentIndex - 1) < 0 ? images.length - 1 : currentIndex - 1;

        // Obtengo la info de cada elemento del arreglo
        const newImageSrc = images[newIndex].currentSrc;
        const newTitle = images[newIndex].alt;
        
        // borro el lightbox anterior
        lightbox.remove();

        // vuelvo a llamar la funcion openLightbox() pero esta vez con la nueva información.
        openLightbox(newIndex, newImageSrc, newTitle);
    });

    nextButton.addEventListener("click", () => {
        // misma logica, solo que en vez de restar, sumo +1 al indice
        const newIndex = (currentIndex + 1) > images.length - 1 ? 0 : currentIndex + 1;
        const newImageSrc = images[newIndex].currentSrc;
        const newTitle = images[newIndex].alt;
        
        lightbox.remove();

        openLightbox(newIndex, newImageSrc, newTitle);
    });
    
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