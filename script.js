// 1. Datos de los 20 productos
const productos = [
    { nombre: "IPhone 13", precio: 600, img: "img/iphone13.jpg" },
    { nombre: "IPhone 13 Pro", precio: 800, img: "img/iphone13pro.jpg" },
    { nombre: "IPhone 13 Pro Max", precio: 990, img: "img/iphone13pro_max.jpg" },
    { nombre: "Iphone 14", precio: 789, img: "img/iphone14.jpg" },
    { nombre: "IPhone 14 Pro", precio: 800, img: "img/iphone14pro.jpg" },
    { nombre: "IPhone 14 Pro Max", precio: 797, img: "img/iphone14pro_max.jpg" },
    { nombre: "IPhone 15", precio: 800, img: "img/iphone15.jpeg" },
    { nombre: "IPhone 15 Pro", precio: 779, img: "img/iphone15pro.jpg" },
    { nombre: "IPhone 15 Pro Max", precio: 1800, img: "img/iphone15pro_max.jpg" },
    { nombre: "Iphone 16", precio: 1000, img: "img/iphone16.jpeg" },
    { nombre: "IPhone 16 Pro", precio: 1500, img: "img/iphone16pro.jpg" },
    { nombre: "IPhone 16 Pro Max", precio: 1800, img: "img/iphone16pro_max.jpeg" },
    { nombre: "IPhone 17", precio: 1085, img: "img/iphone17.jpg" },
    { nombre: "IPhone 17 Pro", precio: 1400, img: "img/iphone17pro.jpeg" },
    { nombre: "Iphone 17 Pro Max", precio: 1700, img: "img/iphone17pro_max.jpeg" },
    { nombre: "Apple Watch", precio: 385, img: "img/apple_watch.jpg" },
    { nombre: "EarPods", precio: 30, img: "img/earpods.jpeg" },
    { nombre: "AirPods", precio: 179, img: "img/airpods.jpeg" },
    { nombre: "AirPods Max", precio: 715, img: "img/airpods_max.jpg" },
    { nombre: "MacBook Pro", precio: 2100, img: "img/macbook_pro.jpg"}
];

const listaTotal = document.getElementById('productos-lista');
const listaCaros = document.getElementById('productos-caros');
const listaDescuento = document.getElementById('productos-descuento');

// forEach
function mostrarProductos(arreglo, contenedor, aplicarDescuento = false) {
    contenedor.innerHTML = '';
    
    arreglo.forEach(prod => {
        let precioFinal = prod.precio;
        if (aplicarDescuento) {
            precioFinal = (prod.precio * 0.88).toFixed(2);
        }

        const card = `
            <div class="card">
                <img src="${prod.img}" alt="${prod.nombre}" style="width:100%">
                <p><strong>${prod.nombre}</strong></p>
                <p>$${precioFinal}</p>
            </div>
        `;
        contenedor.innerHTML += card;
    });
}

function inicializarTienda() {
    // Muestra los productos
    mostrarProductos(productos, listaTotal);

    // Productos más caros (> 500)
    const caros = productos.filter(p => p.precio > 500);
    mostrarProductos(caros, listaCaros);

    // Mostrar con descuento del 12%
    mostrarProductos(productos, listaDescuento, true);
}

// Boton de Buscador
document.getElementById('searchBtn').addEventListener('click', () => {
    const busqueda = document.getElementById('searchInput').value.toLowerCase();
    const filtrados = productos.filter(p => p.nombre.toLowerCase().includes(busqueda));
    mostrarProductos(filtrados, listaTotal);
});

inicializarTienda();