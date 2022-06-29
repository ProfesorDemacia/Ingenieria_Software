function ingresar() {
    var usuario = document.formularioIngreso.inpEmail.value;
    var contrasenia = document.formularioIngreso.inpPassword.value;

    if (usuario.length === 0 || contrasenia.length === 0) {
        modalIngresoAdvertencia.textContent = "Debe ingresar los datos requeridos."
        modalIngreso.show();
    }

    else if (usuario === 'ce.contreras@gmail.com' && contrasenia === 'facil') {
        location.href = 'vista_abogado.html';
    }

    else if (usuario === 'naticcg@gmail.com' && contrasenia === '1234') {
        location.href = 'vista_cliente.html';
    }
    else {
        modalIngresoAdvertencia.textContent = "Usuario no se encuentra registrado."
        modalIngreso.show();
    }
}

function registrar() {
    var nombre = document.formularioRegistro.inpNombre.value;
    var apellidos = document.formularioRegistro.inpApellidos.value;
    var rut = document.formularioRegistro.inpRut.value;
    var email = document.formularioRegistro.inpEmail.value;
    var pass = document.formularioRegistro.inpPassword.value;
    var repass = document.formularioRegistro.inpRepPassword.value;

    if (nombre.length === 0 || apellidos.length === 0) {
        modalRegistroAdvertencia.textContent = "Debe ingresar su nombre completo.";
        modalRegistro.show();
    }

    else if (rut.length === 0 || rut.length > 11 || rut.length < 8  ) {
        modalRegistroAdvertencia.textContent = "Debe ingresar un rut válido.";
        modalRegistro.show();
    }

    else if (email.length === 0) {
        modalRegistroAdvertencia.textContent = "Debe ingresar un email válido.";
        modalRegistro.show();
    }

    else if (pass.length === 0 || repass.length === 0) {
        modalRegistroAdvertencia.textContent = "Debe ingresar una contraseña.";
        modalRegistro.show();
    }

    else if (pass !== repass) {
        modalRegistroAdvertencia.textContent = "La contraseña ingresada no coincide.";
        modalRegistro.show();
    }

    else {
        modalExitoso.show();
    }
}

function volverLogin() {
    location.href = 'index.html';
}