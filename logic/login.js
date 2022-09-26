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
    const postParams = {
        option: 'getUsuario',
        usuario: usuario,
        password: contraseña,
    };

    const jsonData = {
        body: JSON.stringify(postParams),
        method: 'POST',
    };

    fetch('http://localhost/ejericioLogin/login.php', jsonData).then(response => response.json()).then(data => {

        //Si el correo y la contraseña con correctos se enviara al inicio que le corresponde
        if (data.response == "bien") {

            

        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'El correo o la contraseña son invalidos!',
            })
        }
    });

}

