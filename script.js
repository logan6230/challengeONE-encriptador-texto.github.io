console.log("pase por aqui");
var listaVocales = ["e", "o", "i", "a", "u"];
var listaCriptos = ["enter", "ober", "imes", "ai", "ufat"];
textArea();
function textArea() {
    document.getElementById("right").innerHTML = '<div class="img-muñeco"><img src="img/Muñeco.png" alt="muñeco con lupa"></div><div id="foto"></div><div><h1>Ningun mensaje fue encontrado</h1></div><form action=""><textarea name="" id="" cols="30" rows="10"placeholder="Ingrese el texto que dese encriptar o desencriptar"></textarea></form><div d="desencriptado"></div>'

}

function encriptar() {
    var texto = document.getElementById("taMensaje");
    var texto2 = texto.value
    var validacion = validarMayusculas(texto2)
    var contador = 0
    if (validacion) {

        for (let i = 0; i < listaVocales.length; i++) {
            if (contador <= 0) {
                console.log('En el if : ' + listaVocales[i])
                let vocal = new RegExp(listaVocales[i], 'img')
                var encriptar2 = texto2.replace(vocal, listaCriptos[i]);
                contador += 1
            } else {
                let vocal = new RegExp(listaVocales[i], 'img')
                console.log('Expresion 2 : ' + vocal)
                var encriptar2 = encriptar2.replace(vocal, listaCriptos[i]);
            }
            document.getElementById("right").innerHTML = '<textarea >' + encriptar2 + '</textarea><button>Copiar</button>'
        }
    } else {

        alert("El texto ingresado no debe contener: mayusculas\nacentos \nEl unico caracteres especial admitido es ! ")
    }
}

function desencriptar() {
    var texto = document.getElementById("taMensaje");
    var texto2 = texto.value
    var validacion = validarMayusculas(texto2)
    var contador = 0
    if (validacion) {
        for (let i = 0; i < listaVocales.length; i++) {
            console.log('primer for: ' + texto2[i])
            if (contador <= 0) {
                console.log('En el if : ' + listaVocales[i])
                let cripto = new RegExp(listaCriptos[i], 'img')
                var encriptar2 = texto2.replace(cripto, listaVocales[i]);
                contador += 1
            } else {
                let cripto = new RegExp(listaCriptos[i], 'img')
                console.log('Expresion 2 : ' + cripto)
                var encriptar2 = encriptar2.replace(cripto, listaVocales[i]);
            }
            document.getElementById("right").innerHTML = '<textarea>' + encriptar2 + '</textarea>'
        }

    } else {

        alert("El texto ingresado no debe contener: mayusculas\nacentos \nEl unico caracteres especial admitido es ! ")
    }

}

function validarMayusculas(texto) {
    var expresion = new RegExp("^[^-][a-z-!\\s]+$");

    if (expresion.test(texto)) {
        return true;
    } else {
        return false;
    }

}