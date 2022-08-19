console.log("pase por aqui");
var listaVocales = ["e", "o", "i", "a", "u"];
var listaCriptos = ["enter", "ober", "imes", "ai", "ufat"];

var foto = document.getElementById("foto").innerHTML = '<a href="#">link</<>'
    /*
    var encriptar2 = texto.replace(/e/img, 'enter');
    var encriptar2 = encriptar2.replace(/o/img, 'ober');
    var encriptar2 = encriptar2.replace(/i/img, 'imes');
    var encriptar2 = encriptar2.replace(/a/img, 'ai');
    var encriptar2 = encriptar2.replace(/u/img, 'ufat');

    console.log(encriptar2)
       
        var encriptar = texto.replace(/enter/img, 'e');
        var encriptar = encriptar.replace(/ober/img, 'o');
        var encriptar = encriptar.replace(/imes/img, 'i');
        var encriptar = encriptar.replace(/ai/img, 'a');
        var encriptar = encriptar.replace(/ufat/img, 'u');
        console.log(encriptar)

    for (let i = 0; i < listaVocales.length; i++) {
        console.log('primer for: ' + texto[i])

        // for (let j = 0; j < listaVocales.length; j++) {

        if (contador <= 0) {
            console.log('En el if : ' + listaVocales[i])
            let vocal = new RegExp(listaVocales[i], 'img')
            console.log('Expresion  : ' + vocal)
            var encriptar = texto.replace(vocal, listaCriptos[i]);
            contador += 1

            console.log('Encripte en el if : ' + encriptar)


        } else {
            let vocal = new RegExp(listaVocales[i], 'img')
            console.log('Expresion 2 : ' + vocal)
            var encriptar = encriptar.replace(vocal, listaCriptos[i]);

            console.log('Encripte en el  2 if : ' + encriptar)

        }
        console.log('segundo for: ' + texto[i] + '--' + i + '--')
            // }

    }
    console.log('lo encripte yo: ' + encriptar)
        */
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
                console.log('Expresion  : ' + cripto)
                var encriptar2 = texto2.replace(cripto, listaVocales[i]);
                contador += 1

                console.log('Encripte en el if : ' + encriptar2)

            } else {
                let cripto = new RegExp(listaCriptos[i], 'img')
                console.log('Expresion 2 : ' + cripto)
                var encriptar2 = encriptar2.replace(cripto, listaVocales[i]);

                console.log('Encripte en el  2 if : ' + encriptar2)

            }
            document.getElementById("desencriptado").innerHTML = '<textarea >' + encriptar2 + '</textarea>'
        }

        console.log('lo encripte yo: ' + encriptar2)

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