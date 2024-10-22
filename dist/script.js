const carrito = [];

// Agregar habitación al carrito
function agregarAlCarrito(habitacion) {
    carrito.push(habitacion);
    alert(habitacion + " ha sido agregada al carrito.");
    actualizarCarrito();
}

// Actualizar la visualización del carrito
function actualizarCarrito() {
    const cartList = document.getElementById("cartList");
    cartList.innerHTML = carrito.map((item, index) => 
        `<li>${item} <button class="remove-btn" onclick="eliminarDelCarrito(${index})">❌</button></li>`
    ).join('');
}

// Alternar la visibilidad del carrito
function toggleCart() {
    const cartItemsDiv = document.getElementById("cartItems");
    if (cartItemsDiv.style.display === "none" || cartItemsDiv.style.display === "") {
        cartItemsDiv.style.display = "block";
        actualizarCarrito();
    } else {
        cartItemsDiv.style.display = "none";
    }
}

// Eliminar habitación del carrito
function eliminarDelCarrito(index) {
    const habitacionEliminada = carrito.splice(index, 1);
    alert(habitacionEliminada + " ha sido eliminada del carrito.");
    actualizarCarrito();
}

// Reservar habitación
function reservar() {
    const mensaje = "¡Hola! Quiero reservar: " + carrito.join(', ');
    const telefono = "1234567890"; // Reemplaza con el número real
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
}