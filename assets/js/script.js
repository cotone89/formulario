function validaDatos() {
    console.log("entro al script");
    var nombre = document.getElementById("nombre").value;
    var apellidos = document.getElementById("apellidos").value;
    var correo = document.getElementById("correo").value;
    var usuario = document.getElementById("usuario").value;
    var contrasenia = document.getElementById("contrasenia").value;
    var telefono = document.getElementById("telefono").value;

    if (nombre == "" || apellidos == "" || correo == "" || usuario == "" || contrasenia == "" || telefono == "") {
        alert("Existen datos vacios");
        return false;
    }
    if (nombre.length > 20){
        alert("El nombre es muy largo");
        return false;
    }
    if (apellidos.length > 80) {
        alert("El apellido es muy largo");
        return false;
    }
    if (correo.length > 100) {
        alert("El correo es muy largo");
        return false;
    }
    if (usuario.length > 20) {
        alert("El usuario es muy largo");
        return false;
    }
    if (contrasenia.length > 20) {
        alert("La contraseña es muy larga");
        return false;
    }
    if (telefono.length > 15) {
        alert("El telefono es muy largo");
        return false;
    }
    document.getElementById("formularioRegistro").submit();
    alert("Bienvenido(a) " + nombre + " " + apellidos + "!  \n Tu usuario es: " + usuario + "\n Tu contrase\361a es: " + contrasenia);

}

    