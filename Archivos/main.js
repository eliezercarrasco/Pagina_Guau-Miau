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

//------------------------------------Mariajose------------------------------------------------
// Form: Ojo de contraseña (mostrar/ocultar)
// Input y botón para mostrar/ocultar contraseña principal
document.getElementById('togglePassword').addEventListener('click', () => {
  // Cambia el tipo de input entre 'password' y 'text'
  const type = passwordInput.type === 'password' ? 'text' : 'password';
  passwordInput.type = type;
  // Cambia el icono según el estado (ojo abierto/cerrado)
  document.getElementById('togglePassword').className =
    type === 'password' ? 'bi bi-eye-slash-fill' : 'bi bi-eye-fill';
});
// Input y botón para mostrar/ocultar confirmación de contraseña
const confirmInput = document.getElementById('confirmPassword');
document.getElementById('toggleConfirm').addEventListener('click', () => {
  // Cambia el tipo de input entre 'password' y 'text'
  const type = confirmInput.type === 'password' ? 'text' : 'password';
  confirmInput.type = type;

  // Cambia el icono según el estado (ojo abierto/cerrado)
  document.getElementById('toggleConfirm').className =
    type === 'password' ? 'bi bi-eye-slash-fill' : 'bi bi-eye-fill';
});
// Form: Registro
// Evento al enviar el formulario de registro
document.getElementById('formRegistro').addEventListener('submit', function (e) {
  e.preventDefault(); // Evita el envío tradicional del formulario
  // Desestructuración de los valores de los inputs: nombre, apellido, email, password y confirmPassword
  const [nombre, apellido, email, password, confirmPassword] = Array.from(
    this.elements
  );
  // Aquí seguiría la lógica de validación y envío
});
// Form: Registro
// Obtiene los valores de los inputs del formulario de registro
const [nombre, apellido, email, password, confirmPassword] = Array.from(this.elements)
  .slice(0, 5)            // Toma solo los primeros 5 elementos (inputs)
  .map(i => i.value.trim()); // Obtiene su valor y elimina espacios al inicio y fin
// Expresiones regulares para validar email y contraseña
const emailRegex = /^[a-zA-Z0-9._%+-]+@duoc\.cl$/;
const passRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%&*!?]).{8,}$/;
// Validaciones de registro
if (!nombre || !apellido || !email || !password || !confirmPassword) {
  alert('Todos los campos son obligatorios.');
  return;
}

if (!emailRegex.test(email)) {
  alert('Solo se permiten correos con dominio @duoc.cl');
  return;
}

if (password !== confirmPassword) {
  alert('Las contraseñas no coinciden.');
  return;
}

if (!passRegex.test(password)) {
  alert('La contraseña no cumple los requisitos.');
  return;
}
// Registro exitoso (simulado)
alert('¡Registro exitoso!');
this.reset();                  // Limpia el formulario
requisitosDiv.style.display = 'none'; // Oculta los requisitos de contraseña
cerrarModal('registroModal');  // Cierra el formulario de registro
// Form: Login
// Evento al enviar el formulario de login
document.getElementById('formLogin').addEventListener('submit', function (e) {
  e.preventDefault(); // Evita el envío tradicional
  // Obtiene email y contraseña
  const email = this[0].value.trim();
  const password = this[1].value.trim();
  // Valida que el email tenga dominio @duoc.cl
  const emailRegex = /^[a-zA-Z0-9._%+-]+@duoc\.cl$/;
  if (!emailRegex.test(email)) {
    alert('Solo se permiten correos con dominio @duoc.cl');
    return;
  }
  // Valida que la contraseña no esté vacía
  if (password.length < 1) {
    alert('Ingresa tu contraseña');
    return;
  }
  // Inicio de sesión exitoso (simulado)
  alert('Inicio de sesión correcto (simulado).');
  this.reset();           // Limpia el formulario
  cerrarModal('loginModal'); // Cierra el formulario de login
  // Redirecciona a la página de productos
  window.location.href = 'productos.html';
});



