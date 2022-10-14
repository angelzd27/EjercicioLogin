//Variables
let correo, psw, usuario = '';
//variables para editar
let idUsuarios, idPerfil, password, oldPassword;
// revisar

function returnRegistrer(){
    window.open("./formulario.html", "_self");
}

function check() {

    // varificar que estén completos los campos
    usuario_email = document.getElementById("usuario").value;
    usuario_psw = document.getElementById("contraseña").value;

    if (usuario_email.length == 0 || usuario_psw.length == 0) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Debes llenar todos los campos!',
        })
    } else {
        entrar();
    }
}


// entrar
function entrar() {
    correo = document.getElementById("usuario").value;
    psw = document.getElementById("contraseña").value;

    var data = { "_function": "fnLogin", "usuario": {"correo": correo, "password": psw} };

    console.log(data);

    fetch("http://localhost/ejercicioLoginPHP/modelLogin.php", {
       method: 'POST',
       body: JSON.stringify(data),
       header: {
           'Content-Type': 'application/json'
        }

    }).then ( function (response) {
        return response.json();
    }).then ( function(result) {
        console.log ("response", result) ;
          if ( result.error){
            swal.fire(result.message, "", "error");
           } else {
            window.open(result.url, '_parent');
           }
         
    }).catch(error => console.log( 'Ha ocurrido un error: ', error) );

}



