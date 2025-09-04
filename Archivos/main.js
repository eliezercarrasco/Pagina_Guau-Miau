//---------------Eliezer Carrasco--------------
// Form: abrir y cerrar ventanas de formulario
// ================================
// Objeto que almacena referencias a los formularios por su ID
const modales = {
  loginModal: document.getElementById('loginModal'),      // Formulario de login
  registroModal: document.getElementById('registroModal') // Formulario de registro
};
// Función para abrir un formulario
function abrirModal(id) {
  // Cierra todos los formularios antes de abrir el solicitado
  for (let key in modales) modales[key].style.display = 'none'; 
  // Muestra el formulario solicitado como flex (para centrar contenido)
  modales[id].style.display = 'flex';
}
// Función para cerrar un formulario específico
function cerrarModal(id) {
  // Oculta el formulario indicado
  modales[id].style.display = 'none';
}

// Eventos para abrir y cerrar formularios
// Agrega evento a todos los botones de cerrar
document.querySelectorAll('.cerrar').forEach(btn =>
  btn.addEventListener('click', e => {
    e.preventDefault(); // Evita que el enlace recargue la página
    // Cierra el formulario más cercano al botón
    cerrarModal(btn.closest('.modal').id);
  })
);
// Agrega evento a todos los enlaces que abren el formulario de login
document.querySelectorAll('.abrirLogin').forEach(link =>
  link.addEventListener('click', e => {
    e.preventDefault(); // Evita el comportamiento por defecto
    abrirModal('loginModal'); // Abre el formulario de login
  })
);
// Agrega evento a todos los enlaces que abren el formulario de registro
document.querySelectorAll('.abrirRegistro').forEach(link =>
  link.addEventListener('click', e => {
    e.preventDefault(); // Evita el comportamiento por defecto
    abrirModal('registroModal'); // Abre el formulario de registro
  })
);
// Cierra el formulario si se hace clic fuera del contenido
document.querySelectorAll('.modal').forEach(modal =>
  modal.addEventListener('click', e => {
    if (e.target === modal) modal.style.display = 'none';
  })
);
// Form: Validación de contraseña en tiempo real
// Referencia al input de contraseña del formulario de registro
const passwordInput = document.getElementById('passwordRegistro');
// Contenedor que muestra los requisitos de contraseña
const requisitosDiv = document.getElementById('requisitosPassword');
// Objeto que almacena cada requisito individual
const requisitos = {
  length: document.getElementById('reqLength'),   // Mínimo 8 caracteres
  upper: document.getElementById('reqUpper'),    // Al menos una letra mayúscula
  lower: document.getElementById('reqLower'),    // Al menos una letra minúscula
  number: document.getElementById('reqNumber'),  // Al menos un número
  special: document.getElementById('reqSpecial') // Al menos un carácter especial
};
// Evento que se ejecuta cada vez que se escribe en el input de contraseña
passwordInput.addEventListener('input', () => {
  const val = passwordInput.value;  // Valor actual del input
  // Expresiones regulares para validar cada criterio
  const regexUpper = /[A-Z]/,
        regexLower = /[a-z]/,
        regexNumber = /\d/,
        regexSpecial = /[@#$%&*!?]/;
  // Mostrar u ocultar el contenedor de requisitos según si hay texto
  requisitosDiv.style.display = val.length === 0 ? 'none' : 'block';
  // Validación de longitud mínima
  requisitos.length.className =
    val.length >= 8 ? 'requisito valid' : 'requisito invalid';
  requisitos.length.querySelector('i').className =
    val.length >= 8 ? 'bi bi-check-circle-fill' : 'bi bi-x-circle-fill';
  // Validación de letra mayúscula
  requisitos.upper.className = regexUpper.test(val)
    ? 'requisito valid'
    : 'requisito invalid';
  requisitos.upper.querySelector('i').className = regexUpper.test(val)
    ? 'bi bi-check-circle-fill'
    : 'bi bi-x-circle-fill';
  // Validación de letra minúscula
  requisitos.lower.className = regexLower.test(val)
    ? 'requisito valid'
    : 'requisito invalid';
  requisitos.lower.querySelector('i').className = regexLower.test(val)
    ? 'bi bi-check-circle-fill'
    : 'bi bi-x-circle-fill';
  // Validación de número
  requisitos.number.className = regexNumber.test(val)
    ? 'requisito valid'
    : 'requisito invalid';
  requisitos.number.querySelector('i').className = regexNumber.test(val)
    ? 'bi bi-check-circle-fill'
    : 'bi bi-x-circle-fill';
  // Validación de carácter especial
  requisitos.special.className = regexSpecial.test(val)
    ? 'requisito valid'
    : 'requisito invalid';
  requisitos.special.querySelector('i').className = regexSpecial.test(val)
    ? 'bi bi-check-circle-fill'
    : 'bi bi-x-circle-fill';
});

//------------------------------------------------------------------------------------


