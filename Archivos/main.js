// Modales
const modales = { loginModal: document.getElementById('loginModal'), registroModal: document.getElementById('registroModal') };
function abrirModal(id){ for (let key in modales) modales[key].style.display = 'none'; modales[id].style.display = 'block'; }
function cerrarModal(id){ modales[id].style.display = 'none'; }
document.querySelectorAll('.cerrar').forEach(btn=>btn.addEventListener('click', e=>{ e.preventDefault(); cerrarModal(btn.closest('.modal').id); }));
document.querySelectorAll('.abrirLogin').forEach(link=>link.addEventListener('click', e=>{ e.preventDefault(); abrirModal('loginModal'); }));
document.querySelectorAll('.abrirRegistro').forEach(link=>link.addEventListener('click', e=>{ e.preventDefault(); abrirModal('registroModal'); }));
document.querySelectorAll('.modal').forEach(modal=>modal.addEventListener('click', e=>{ if(e.target===modal) modal.style.display='none'; }));

// Requisitos de contraseña
const passwordInput = document.getElementById('passwordRegistro');
const requisitosDiv = document.getElementById('requisitosPassword');
const requisitos = { length: document.getElementById('reqLength'), upper: document.getElementById('reqUpper'), lower: document.getElementById('reqLower'), number: document.getElementById('reqNumber'), special: document.getElementById('reqSpecial') };
passwordInput.addEventListener('input', ()=>{ const val=passwordInput.value; const regexUpper=/[A-Z]/, regexLower=/[a-z]/, regexNumber=/\d/, regexSpecial=/[@#$%&*!?]/; requisitosDiv.style.display = val.length===0?'none':'block'; requisitos.length.className=val.length>=8?'requisito valid':'requisito invalid'; requisitos.length.querySelector('i').className=val.length>=8?'bi bi-check-circle-fill':'bi bi-x-circle-fill'; requisitos.upper.className=regexUpper.test(val)?'requisito valid':'requisito invalid'; requisitos.upper.querySelector('i').className=regexUpper.test(val)?'bi bi-check-circle-fill':'bi bi-x-circle-fill'; requisitos.lower.className=regexLower.test(val)?'requisito valid':'requisito invalid'; requisitos.lower.querySelector('i').className=regexLower.test(val)?'bi bi-check-circle-fill':'bi bi-x-circle-fill'; requisitos.number.className=regexNumber.test(val)?'requisito valid':'requisito invalid'; requisitos.number.querySelector('i').className=regexNumber.test(val)?'bi bi-check-circle-fill':'bi bi-x-circle-fill'; requisitos.special.className=regexSpecial.test(val)?'requisito valid':'requisito invalid'; requisitos.special.querySelector('i').className=regexSpecial.test(val)?'bi bi-check-circle-fill':'bi bi-x-circle-fill'; });

// Ojo de contraseña
document.getElementById('togglePassword').addEventListener('click', ()=>{ const type=passwordInput.type==='password'?'text':'password'; passwordInput.type=type; document.getElementById('togglePassword').className=type==='password'?'bi bi-eye-slash-fill':'bi bi-eye-fill'; });
const confirmInput = document.getElementById('confirmPassword');
document.getElementById('toggleConfirm').addEventListener('click', ()=>{ const type=confirmInput.type==='password'?'text':'password'; confirmInput.type=type; document.getElementById('toggleConfirm').className=type==='password'?'bi bi-eye-slash-fill':'bi bi-eye-fill'; });

// Registro
document.getElementById('formRegistro').addEventListener('submit', function(e){
  e.preventDefault();
  const [nombre, apellido, email, password, confirmPassword]=Array.from(this.elements).slice(0,5).map(i=>i.value.trim());
  const terminos=document.getElementById('terminos').checked;
  const emailRegex=/^[a-zA-Z0-9._%+-]+@duoc\.cl$/;
  const passRegex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%&*!?]).{8,}$/;
  if(!nombre||!apellido||!email||!password||!confirmPassword){ alert("Todos los campos son obligatorios."); return; }
  if(!emailRegex.test(email)){ alert("Solo se permiten correos con dominio @duoc.cl"); return; }
  if(password!==confirmPassword){ alert("Las contraseñas no coinciden."); return; }
  if(!passRegex.test(password)){ alert("La contraseña no cumple los requisitos."); return; }
  if(!terminos){ alert("Debes aceptar los términos y condiciones."); return; }
  alert("¡Registro exitoso!");
  this.reset();
  requisitosDiv.style.display='none';
  cerrarModal('registroModal');
});

// Login con redirección
document.getElementById('formLogin').addEventListener('submit', function(e){
  e.preventDefault();
  const email=this[0].value.trim();
  const password=this[1].value.trim();
  const emailRegex=/^[a-zA-Z0-9._%+-]+@duoc\.cl$/;
  if(!emailRegex.test(email)){ alert("Solo se permiten correos con dominio @duoc.cl"); return; }
  if(password.length<1){ alert("Ingresa tu contraseña"); return; }
  alert("Inicio de sesión correcto (simulado).");
  this.reset();
  cerrarModal('loginModal');
  window.location.href="productos.html";
});
