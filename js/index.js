
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
                    "<button type='button' class='btn btn-warning' onclick='abrirForm("+letUsuario.idUsuario+")'>EDITAR</button>"+
                    "<button type='button' class='btn btn-info' onclick='eliminarItem("+letUsuario.idUsuario+")'>ELIMINAR</button>"+
                    "</td>";
          dataFila +="<tr>";


    }
    document.getElementById("dataUsuarios").innerHTML = dataFila;
  }
  else{
    document.getElementById("dataUsuarios").innerHTML = "<tr><td colspan='7'>No hay datos</td></tr>";
  }
}


function abrirForm(idForm){
    localStorage.setItem("idForm", JSON.stringify(idForm));
    window.location.replace("index-Form.html");
}

function eliminarItem(idItem){
    for(const i in tablaUsuario){
        let letUsuario = JSON.parse(tablaUsuario[i]);
        if(letUsuario.idUsuario == idItem){
            tablaUsuario.splice(i,1);
            localStorage.setItem("tablaUsuarioStorage",JSON.stringify(tablaUsuario));
        }
    }
}