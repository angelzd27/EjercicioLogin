function checkForms() {

    // varificar que estén completos los campos
    _nombre = document.getElementById("nombre").value;
    _aPaterno = document.getElementById("aPaterno").value;
    _correo = document.getElementById("correo").value;
    _contrasena = document.getElementById("contrasena").value;
    _contrasenaConf = document.getElementById("contrasenaConf").value;

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

