var textInput = document.getElementById("textInput");
var resultado = document.getElementById("resultado");

function criptografar() {
    var text = textInput.value;
    var textResult = text.replace(/e/g, "enter").replace(/i/g, "imes")
        .replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");

    aparecerResultado(textResult);
};

function descriptografar() {
    var text = textInput.value;
    var textResult = text.replace(/enter/g, "e").replace(/imes/g, "i")
        .replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");

    aparecerResultado(textResult);
};

function aparecerResultado(texto) {
    resultado.innerText = texto;
};

function copiar() {
    resultado.select();
    resultado.setSelectionRange(0, 99999)
    document.execCommand("copy");
};