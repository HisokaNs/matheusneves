window.onload = function () {

    const bttn5 = document.getElementById("bttn5") ? document.getElementById("bttn5") : '';

    const entrada = document.getElementById("entrada") ? document.getElementById("entrada") : '';
    const resultado = document.getElementById("resultado") ? document.getElementById("resultado") : '';
    const inputTexto = document.getElementById("inputTexto") ? document.getElementById("inputTexto") : '';

    const inputTextoSearch = document.getElementById("inputTextoSearch") ? document.getElementById("inputTextoSearch") : '';
    const inputTextoChange = document.getElementById("inputTextoChange") ? document.getElementById("inputTextoChange") : '';

    if (bttn5 != '') {
        bttn5.addEventListener("click", function () {
            entrada.innerHTML = "Entrada: " + inputTexto.value;
            resultado.innerHTML = "resultado: " + subistituiTexto(inputTexto.value, inputTextoSearch.value, inputTextoChange.value);
        });
    }
    function subistituiTexto(text, wordTosearch, newWord) {
        return text.replaceAll(wordTosearch, newWord);
    }
}