import { db } from "./app";
import { getProducts } from "./functions/products";

const productSection = document.getElementById("products");
const categoryFilter = document.getElementById("category");
const orderFilter = document.getElementById("order");

let products = [];

async function loadProducts() {
    const firebaseProducts = await getProducts(db);
    productSection.innerHTML = "";
    firebaseProducts.forEach(product => {
        renderProduct(product);
    });

    products = firebaseProducts;
}

function renderProduct(item) {
    const product = document.createElement("a");
    product.className = "product";

    product.setAttribute("href", `./product.html?id=${item.id}`);

    const coverImage = item.images ? item.images[0] : "https://cdn1.iconfinder.com/data/icons/business-company-1/500/image-512.png";

    product.innerHTML = `
    <img src="${coverImage}" alt="" class="product__image">
    <div class="product__info">
        <p class="product__category">${item.category}</p> 
        <h2 class="product__name">${item.name}</h2>
        <h3 class="product__price">$${item.price}</h3>
        <button class="product__cart">Añadir al carrito</button>
    </div>
    `;

    productSection.appendChild(product);
}


function filterBy(){
    const newCategory = categoryFilter.value;
    const newOrder = orderFilter.value;

    console.log(newOrder);

    let filteredProducts = [];

    if (newCategory !== "") {
        filteredProducts = products.filter((product) => product.category === newCategory);
    } else {
        filteredProducts = products;
    }

    if (newOrder === "asc") {
        filteredProducts = filteredProducts.sort((a, b) => b.price - a.price);
    }

    if (newOrder === "desc") {
        filteredProducts = filteredProducts.sort((a, b) => a.price - b.price);
    }
    
    productSection.innerHTML = "";
    filteredProducts.forEach(product => {
        renderProduct(product);
    });

}

categoryFilter.addEventListener("change", e => {
    filterBy();
});

orderFilter.addEventListener("change", e => {
    filterBy();
});


loadProducts();