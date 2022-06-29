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

    else if (rut.length === 0 || rut.length > 11 || rut.length < 8) {
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

function toggleSolicitud() {
    var tabla = document.getElementById("listaSolicitudes");
    var form = document.getElementById("ingresoSolicitud");
    if (tabla.style.display === "none") {
        form.style.display = "none";
        tabla.style.display = "block";
    } else {
        tabla.style.display = "none";
        form.style.display = "block";
    }
}

function generarSolicitud() {
    var table = document.getElementById("tablaSolicitudes");
    //var nombre = document.formularioSolicitud.fs_nombre.value;
    //var apellidos = document.formularioSolicitud.fs_apellidos.value;
    //var rut = document.formularioSolicitud.fs_rut.value;
    //var email = document.formularioSolicitud.fs_email.value;
    //var direccion = document.formularioSolicitud.fs_direccion.value;
    //var comuna = document.formularioSolicitud.fs_direccion.value;
    var numSol = document.formularioSolicitud.fs_num.value;
    var tipo = document.formularioSolicitud.fs_tipo.value;

    var tbodyRowCount = table.tBodies[0].rows.length;

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;


    var tablaSolicitudes = document.getElementById("tablaSolicitudes").insertRow(1)
    let nueva_fila1 = tablaSolicitudes.insertCell(0);
    let nueva_fila2 = tablaSolicitudes.insertCell(1);
    let nueva_fila3 = tablaSolicitudes.insertCell(2);
    let nueva_fila4 = tablaSolicitudes.insertCell(3);
    let nueva_fila5 = tablaSolicitudes.insertCell(4);
    let nueva_fila6 = tablaSolicitudes.insertCell(5);

    nueva_fila1.innerHTML = tbodyRowCount + 1;
    nueva_fila2.innerHTML = numSol;
    nueva_fila3.innerHTML = tipo;
    nueva_fila4.innerHTML = today;
    nueva_fila5.innerHTML = "Pendiente de revisión";
    nueva_fila6.innerHTML = "<a href=''><i class='bi bi-eye-fill'></i></a>";

    modalSolicitudExitosa.show();
    limpiarFormSolicitud();
}

function limpiarFormSolicitud() {
    document.formularioSolicitud.reset();
}



function toggleContratos() {
    var tabla = document.getElementById("listaContratos");
    var contrato = document.getElementById("vistaContrato");
    if (tabla.style.display === "none") {
        contrato.style.display = "none";
        tabla.style.display = "block";
    } else {
        tabla.style.display = "none";
        contrato.style.display = "block";
    }
}

function backPresupuestos() {
    location.href = 'presupuesto_abogado.html';
}