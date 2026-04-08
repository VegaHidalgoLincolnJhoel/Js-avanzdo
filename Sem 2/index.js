function normalizar() {
  let text = document.getElementById("nombreInput").value;
  let limpiar = text.trim();
  let capitalizar = limpiar.charAt(0).toUpperCase() + limpiar.slice(1);

   document.getElementById("salidaNormalizada").textContent = capitalizar;
}