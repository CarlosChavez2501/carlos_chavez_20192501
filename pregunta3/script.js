function writeArrayToSessionStorage(keyName, arrayObject) {
    sessionStorage.setItem(keyName, JSON.stringify(arrayObject))
}

function processform() {
    var reg_nombre = document.getElementById("nombre").value;
    var reg_orientacion = document.getElementById("orientacion").value;
    var reg_votos = document.getElementById("votos").value;
    var reg_estado = ""

    if (reg_votos == 50) {
        reg_estado = "=50"
    } else {
        if (reg_votos > 50) {
            reg_estado = "+50"
        } else {
            reg_estado = "-50"
        }
    }

    var PartidoArray = []
    var nuevoPartido = {
        "nombre": reg_nombre,
        "orientacion": reg_orientacion,
        "votos": reg_votos,
        "estado": reg_estado
    }

    PartidoArray.push(nuevoPartido)
    writeArrayToSessionStorage("PartidoArray", loginArray)
}

function tabla() {


}



