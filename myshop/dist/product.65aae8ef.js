const productGallery = document.getElementById("productGallery");
const productImage = document.getElementById("productMainImage");
const productInfo = document.getElementById("productInfo");
async function getProduct() {
    const productId = getSearchParam("id");
}
function loadProductInfo(product) {
    productInfo.innerHTML = `
        <h1 class="product__name">${product.name}</h1>
        <p class="product__description">${product.description}</p>

        <h3 class="product__price">${product.price}</h3>

        <button class="product__cart">Añadir al carrito</button>
    `;
    productImage.setAttribute("src", product.images[0]);
}
function createGallery(images) {
    const gallery = document.getElementById("div");
    images.forEach((image)=>{
        gallery.innerHTML += `<img src="${image}">`;
    });
    productGallery.appendChild(gallery);
}
getProduct();

//# sourceMappingURL=product.65aae8ef.js.map
