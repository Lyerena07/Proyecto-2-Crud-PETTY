
let tablaUsuario = localStorage.getItem ("tablaUsuarioStorage");
tablaUsuario = JSON.parse(tablaUsuario);
if(tablaUsuario == null){
    tablaUsuario =[];
}

function listar (){
console.log("INGRESANDO A LISTAR..");

let dataFila ='';

if(tablaUsuario.length > 0) {
    for(const i in tablaUsuario){
        let letUsuario = JSON.parse(tablaUsuario[i]);
        dataFila += "<tr>";
        dataFila += "<td>"+letUsuario.idUsuario+"</td>";
        dataFila += "<td>"+letUsuario.nombreApellido+"</td>";
        dataFila += "<td>"+letUsuario.Identificacion+"</td>";
        dataFila += "<td>"+letUsuario.Telefono+"</td>";
        dataFila += "<td>"+letUsuario.Direccion+"</td>";
        dataFila += "<td>"+letUsuario.Estado+"</td>";
        dataFila += "<td>"+
"<button type='button' class='btn btn-warning' oneclick='abrirFrom("+letUsuario.idUsuario+")'>EDITAR</button>"+
"</td>";
dataFila +="<tr>";


    }
    document.getElementById("dataUsuarios").innerHTML = dataFila;
  }
}


function abrirform(idForm){
    localStorage.setItem("idFrom", JSON.stringify(idForm));
    window.location.replace("index-form.html");
}