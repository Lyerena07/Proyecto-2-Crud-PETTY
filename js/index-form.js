

let tablaUsuario = localStorage.getItem ("tablaUsuarioStorage");
tablaUsuario = JSON.parse(tablaUsuario);
if(tablaUsuario== null){
    tablaUsuario =[];
}


let idForm =localStorage.getItem("idFrom");
idForm = JSON.parse(idForm);
if(idForm == null){
     idForm  = 0;   
}

cargarPagina();

function guardar(){
    console.log("PRESIONO GUARDAR...");
    var objUsuario = JSON.stringify({
        idUsuario: idForm,
        nombreApellido: document.getElementById("txtNombApellido").value,
        Identificacion: document.getElementById("txtIdentificacion").value,
        Telefono: document.getElementById("txtTelefono").value,
        Direccion: document.getElementById("txtDireccion").value,
        Estado: document.getElementById("cboEstado").value

    });
    console.log(objUsuario);
    //EDITAR

    //NUEVOS PACIENTES 
    tablaUsuario.push(objUsuario);

    localStorage.setItem("tablaUsuarioStorage",JSON.stringify(tablaUsuario));
    window.location.replace("index.html");
}
function cargarPagina(){
    if(idForm > 0){
        //sacar datos de la fila de la tabla y ponerlo en el formulario
    }
}