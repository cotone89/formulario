function validaDatos() {
    console.log("entro al script");
    var nombre = document.getElementById("nombre").value;
    var apellidos = document.getElementById("apellidos").value;
    var correo = document.getElementById("correo").value;
    var usuario = document.getElementById("usuario").value;
    var contrasenia = document.getElementById("contrasenia").value;
    var telefono = document.getElementById("telefono").value;

    if (nombre == "" || apellidos == "" || correo == "" || usuario == "" || contrasenia == "" || telefono == "") {
        alert("Debes completar todos los campos");
        return false;
    }
    if (nombre.length() > 20){
        alert("El nombre es muy largo");
        return false;
    }
        alert("Bienvenido(a) " + nombre + " " + apellidos + "!  \n Tu usuario es: " + usuario + "\n Tu contrase\361a es: " + contrasenia);

}

    