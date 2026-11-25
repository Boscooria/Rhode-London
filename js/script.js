// ------------------- MENÚ HAMBURGUESA -------------------

const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');

// Alterna la visibilidad del menú hamburguesa
burger.addEventListener('click', () => {
    menu.classList.toggle('menu-show');
});

// Cierra el menú si se hace clic fuera de él
document.addEventListener('click', (event) => {
    if (!burger.contains(event.target) && !menu.contains(event.target)) {
        menu.classList.remove('menu-show');
    }
});

// ------------------- VENTANA MODAL -------------------

// Obtener elementos del modal
const modal = document.getElementById("modalWindow");
const openModalBtn = document.getElementById("openModal");
const closeModalBtn = document.querySelector(".close");

// Abrir el modal al hacer clic en el botón
openModalBtn.addEventListener("click", () => {
    modal.style.display = "block";
});

// Cerrar el modal al hacer clic en la "X"
closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Cerrar el modal al hacer clic fuera de él
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

// ------------------- VALIDACIÓN DINÁMICA -------------------

// Eventos de input para validar mientras el usuario escribe
document.getElementById('nombre').addEventListener('input', validateName);
document.getElementById('email').addEventListener('input', validateEmail);
document.getElementById('cantidad').addEventListener('input', validateCantidad);

// Validar nombre
function validateName() {
    const nombre = document.getElementById('nombre').value.trim();
    const nombreCheck = document.getElementById('nombreCheck');

    if (nombre !== "") {
        nombreCheck.textContent = "✔"; // Mostrar check verde
        nombreCheck.classList.add('visible');
    } else {
        nombreCheck.classList.remove('visible');
    }
}

// Validar email
function validateEmail() {
    const email = document.getElementById('email').value.trim();
    const emailCheck = document.getElementById('emailCheck');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(email)) {
        emailCheck.textContent = "✔"; // Mostrar check verde
        emailCheck.classList.add('visible');
    } else {
        emailCheck.classList.remove('visible');
    }
}

// Validar cantidad de tickets
function validateCantidad() {
    const cantidad = document.getElementById('cantidad').value;
    const cantidadCheck = document.getElementById('cantidadCheck');

    if (cantidad >= 1 && cantidad <= 5) {
        cantidadCheck.textContent = "✔"; // Mostrar check verde
        cantidadCheck.classList.add('visible');
    } else {
        cantidadCheck.classList.remove('visible');
    }
}

// Validación del formulario completa al enviar
function validateForm() {
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const cantidad = document.getElementById('cantidad').value;

    if (nombre === "" || email === "" || cantidad < 1 || cantidad > 5) {
        alert("Por favor, completa todos los campos correctamente.");
        return false;
    }
    return true;
}
