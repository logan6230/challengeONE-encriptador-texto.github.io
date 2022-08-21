console.log("pase por aqui");
var listaVocales = ["e", "o", "i", "a", "u"];
var listaCriptos = ["enter", "ober", "imes", "ai", "ufat"];
var validador = document.getElementById('box-msj')

function encriptar() {
    if (document.getElementById('box-msj').value == "" || document.getElementById('box-msj').value.length < 2) {
        alert("Debe escribir o pegar un un texto ue tenga al menos dos letras")
    } else {
        var texto = document.getElementById("box-msj");
        var texto2 = texto.value
        console.log("pase por aqui" + texto2);
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
                console.log(encriptar2)

            }
        } else {

            alert("El texto ingresado no debe contener:\nMenos de una letra\nmayusculas\nacentos\nEl unico caracteres especial admitido es ! ")
        }
        if (validacion) {
            document.getElementById("show-msj").innerHTML = '<textarea id="msjCopiar">' + encriptar2 + '</textarea><button class="btn-copiar" onclick="copiarTexto()">Copiar</button>'
            document.getElementById("containerBoxMsj").innerHTML = '<textarea id="box-msj" rows="37" class="container-text" placeholder="Escriba Escriba o pegue su texto aqui..."></textarea> ';
        }
    }
}

function desencriptar() {
    if (document.getElementById('box-msj').value == "" || document.getElementById('box-msj').value.length < 2) {
        alert("Debe escribir o pegar un un texto ue tenga al menos dos letras")
    } else {
        console.log('validador' + document.getElementById('box-msj').value)
        var texto = document.getElementById("box-msj");
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
                console.log('prueba de repeticion' + encriptar2)
            }

        } else {
            alert("El texto ingresado no debe contener: mayusculas\nacentos \nEl unico caracteres especial admitido es ! ")
        }
        if (validacion) {
            document.getElementById("show-msj").innerHTML = '<textarea id="msjCopiar">' + encriptar2 + '</textarea><button class="btn-copiar" onclick="copiarTexto()">Copiar</button>'
            document.getElementById("containerBoxMsj").innerHTML = '<textarea id="box-msj" rows="37" class="container-text" placeholder="Escriba o pegue su texto aqui..."></textarea> ';
        }

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

function copiarTexto() {
    document.getElementById("msjCopiar").select()
    document.execCommand('copy');
}