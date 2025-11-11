// componente mejorado

const productos = [
    { nombre: "iphone", precio: 30000, img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-compare-iphone-17-pro-202509?wid=400&hei=512&fmt=jpeg&qlt=90&.v=M0dlUVBobHVpY1h1dmlaR3RZekpEMi9sbCsxVVJmYjNiS29STjQrZEV5NnNlL1VpWDFHcHBMQXVUWWdWdkZZNEk4YjFEWjhuZXFwNUlmRWZZRFVkVmtQN0dKS3RDVnJRc1haUzhoeEN5eEpWcnBaYlhkL0dOd2g3cENJOVZNejQ" },
    { nombre: "coche", precio: 5000000, img: "https://cdn.24net.cz/5/obrazek/lamborghini-revuelto-65591" },
    { nombre: "iphone", precio: 30000, img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-compare-iphone-17-pro-202509?wid=400&hei=512&fmt=jpeg&qlt=90&.v=M0dlUVBobHVpY1h1dmlaR3RZekpEMi9sbCsxVVJmYjNiS29STjQrZEV5NnNlL1VpWDFHcHBMQXVUWWdWdkZZNEk4YjFEWjhuZXFwNUlmRWZZRFVkVmtQN0dKS3RDVnJRc1haUzhoeEN5eEpWcnBaYlhkL0dOd2g3cENJOVZNejQ" },
    { nombre: "coche", precio: 5000000, img: "https://cdn.24net.cz/5/obrazek/lamborghini-revuelto-65591" }
];

const contenedor = document.getElementById("contenedor");

productos.forEach(prod => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
    <img src="${prod.img}" alt=${prod.nombre}>
            <h3>${prod.nombre}</h3>
            <p>${prod.precio}</p>
            <button>Agregar</button>
    `;

    contenedor.appendChild(card);
});