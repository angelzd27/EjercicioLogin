function checkForms() {

    // varificar que estén completos los campos
    _nombre = document.getElementById("nombre").value;
    _aPaterno = document.getElementById("aPaterno").value;
    _correo = document.getElementById("correo").value;
    _contrasena = document.getElementById("password").value;
    _contrasenaConf = document.getElementById("passwordConf").value;

    if (_nombre.length == 0 || _aPaterno.length == 0 ||
         _correo == 0 || _contrasena.length == 0 ||
        _contrasenaConf == 0
        ) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Debes llenar todos los campos!',
        })
    } else {
        // entrar();
    }
}

function registrar() {
    checkForms();
    
    nombre = document.getElementById("nombre").value;
    apellido_paterno = document.getElementById("aPaterno").value; 
    apellido_materno = document.getElementById("aMaterno").value; 
    correo = document.getElementById("correo").value; 
    password = document.getElementById("password").value; 
    passwordConf = document.getElementById("passwordConf").value;
    perfil = document.getElementById("select_id").value;

    if (password === passwordConf) {

        var data = { 
        "_function": "fnRegister", 
        "nombre": nombre,
        "apellido_paterno": apellido_paterno,
        "apellido_materno": apellido_materno,
        "correo": correo, "password": password,
        "perfil": perfil 
    } 

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

    else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Las contraseñas deben ser iguales!',
        })
    }
}

 
