function agregarFila() {
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

    document.getElementById("tablaprueba").insertRow(-1).innerHTML = '<tr><td>' + reg_nombre +
        '</td><td>' + reg_orientacion +
        '</td><td>' + reg_votos +
        '</td><td>' + reg_estado + '</td></tr>';

}


