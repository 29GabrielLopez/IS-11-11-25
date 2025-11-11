// componente mejorado

const productos = [
    { nombre: "galaxia", precio: 30, img: "https://th.bing.com/th/id/R.13fe574aa993c144fbed2fbf64ff6a28?rik=znJCPXSD8c%2fqjA&riu=http%3a%2f%2fwww.elfirmamento.com%2fgaleria%2fmessier%2ffotos_messier%2fM31_2011_2000.jpg&ehk=02OvLfSVhW0gTDoIM9bhYDBBHGEd3P0susTgThpnBBw%3d&risl=1&pid=ImgRaw&r=0" },
    { nombre: "coche", precio: 5000000, img: "https://cdn.24net.cz/5/obrazek/lamborghini-revuelto-65591" },
    { nombre: "galaxia", precio: 30, img: "https://th.bing.com/th/id/R.13fe574aa993c144fbed2fbf64ff6a28?rik=znJCPXSD8c%2fqjA&riu=http%3a%2f%2fwww.elfirmamento.com%2fgaleria%2fmessier%2ffotos_messier%2fM31_2011_2000.jpg&ehk=02OvLfSVhW0gTDoIM9bhYDBBHGEd3P0susTgThpnBBw%3d&risl=1&pid=ImgRaw&r=0" },
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