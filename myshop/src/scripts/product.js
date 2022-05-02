import { getProduct } from "./functions/getProduct";

const productInfoSection = document.getElementById("productInfo");
const productAssetsSection = document.getElementById("productAssets");

function getParam(param) {
    const url = window.location.search;
    const searchParams = new URLSearchParams(url);
    const productId = searchParams.get(param);
    return productId;
}

async function loadProduct() {
    const productId = getParam("id"); // http://localhost:1234/product.html?id=TXQ9Wf1GIoAOJLkIEMYo&age=20

    const data = await getProduct(productId);

    const product = {
        ...data,
        id: productId, // docSnap.id,
    }

    renderProduct(product);
}

function renderProduct(product) {
    productAssetsSection.innerHTML = `
    <img class="product__mainImage" id="mainImage" src="${product.images[0]}">`;

    productInfoSection.innerHTML = `
    <h1 class="product__name">${product.name}</h1>
    <p class="product__description">${product.description}</p>
    <h3 class="product__price">$${product.price}</h3>
    <button class="product__cart">Add to cart</button>`;

    if (product.images.length > 1) {
        createGallery(product.images);
    }
}

function createGallery(images) {
    const mainImage = document.getElementById("mainImage");

    const gallery = document.createElement("div");
    gallery.className = "product__gallery";

    images.forEach(image => {
        gallery.innerHTML += `<img src="${image}">`;
    });

    productAssetsSection.appendChild(gallery);

    const galleryImages = document.querySelector(".product__gallery");

    galleryImages.addEventListener("click", e => {
        if (e.target.tagName === "IMG") {
            mainImage.setAttribute("src", e.target.currentSrc);
        }
    });
}

loadProduct();