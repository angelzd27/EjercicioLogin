//Variables
var correo, contraseña, usuario = '';
//variables para editar
var idUsuarios, idPerfil, password, oldPassword;
// revisar
function check() {

    // varificar que estén completos los campos
    usuario = document.getElementById("usuario").value;
    contraseña = document.getElementById("contraseña").value;

    if (usuario.length == 0 || contraseña.length == 0) {
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
    var data = { "_function": "fnLogin", "correo": usuario, "password": contraseña };

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

