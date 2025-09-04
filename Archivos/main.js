
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

