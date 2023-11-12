let tablaUsuario = localStorage.getItem("tablaUsuarioStorage");
tablaUsuario = JSON.parse(tablaUsuario);
if (tablaUsuario == null) {
  tablaUsuario = [];
}

let idForm = localStorage.getItem("idForm");
idForm = JSON.parse(idForm);
if (idForm == null) {
  idForm = 0;
}

    cargarPagina();

function guardar() {
  console.log("PRESIONO GUARDAR...");
  let objUsuario = JSON.stringify({
    idUsuario: idForm > 0 ? idForm : tablaUsuario.length + 1,
    nombreApellido: document.getElementById("txtNombApellido").value,
    Identificacion: document.getElementById("txtIdentificacion").value,
    Telefono: document.getElementById("txtTelefono").value,
    Direccion: document.getElementById("txtDireccion").value,
    Estado: document.getElementById("cboEstado").value,
  });
  console.log(objUsuario);
  //EDITAR
  if (idForm > 0) {
    for (const i in tablaUsuario){
    let letUsuario = JSON.parse(tablaUsuario[i]);
    if (letUsuario.idUsuario == idForm){
        tablaUsuario[i] = objUsuario;
        break;
     }
    }
  } else {
  //NUEVOS PACIENTES
  tablaUsuario.push(objUsuario);

  }
  
  localStorage.setItem("tablaUsuarioStorage", JSON.stringify(tablaUsuario));
  window.location.replace("index.html");

 
}

function cargarPagina() {
    console.log("inicia funcion cargarPagina ");
  if (idForm > 0) {
    for (const i in tablaUsuario) {
      let letUsuario = JSON.parse(tablaUsuario[i]);
      if (letUsuario.idUsuario == idForm){
        document.getElementById("txtIdUsuario").value = letUsuario.idUsuario;
        document.getElementById("txtNombApellido").value = letUsuario.nombreApellido;
        document.getElementById("txtIdentificacion").value = letUsuario.Identificacion;
        document.getElementById("txtTelefono").value = letUsuario.Telefono;
        document.getElementById("txtDireccion").value = letUsuario.Direccion;
        break;
        
      }
    }
  }
}
