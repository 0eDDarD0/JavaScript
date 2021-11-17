function validarMayuscula(s){
    return /[A-ZÁÉÍÓÚ]+/.test(s);
}

function validarCaracteresEspeciales(s){
    return /[!@#$%^&]+/.test(s);
}

function validarCorreo(s){
    return /(\w+)\@(\w+)([\.])([a-z]{2,3})/.test(s);
}

function validarTarjetaCredito(s){
    return /[\d]{4} [\d]{4} [\d]{4} [\d]{4}/.test(s);
}

function validarLongitud(s){
    return /[\d]{8}/.test(s);
}

function validarNumero(s){
    return /[\d]+/.test(s);
}