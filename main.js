onload = () =>{
    document.body.classList.remove("container");
};

setTimeout(() => {
  const mensaje = document.getElementById('mensaje-amor');
  mensaje.style.display = 'flex';
}, 5000);

function cerrarMensaje() {
  document.getElementById('mensaje-amor').style.display = 'none';
}
