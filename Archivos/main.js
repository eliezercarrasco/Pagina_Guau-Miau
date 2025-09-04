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



