window.onload = function () { 

const bttn1 = document.getElementById("bttn1") ? document.getElementById("bttn1") : '';
const entrada = document.getElementById("entrada") ? document.getElementById("entrada") : '';
const resultado = document.getElementById("resultado") ? document.getElementById("resultado") : '';

// Exercício 1, 2, 3, 4, 5
const inputText = document.getElementById("inputText") ? document.getElementById("inputText") : '';
if(bttn1 != '')
{
    bttn1.addEventListener("click", function() {
        entrada.innerHTML = "Entrada: " + inputText.value;
        resultado.innerHTML = "resultado: " + inverterTexto(inputText.value);
    });
}
function inverterTexto(text)
{
    let letters = text.split(""); // transforma o texto em array de letras
    let invertedLetters = letters.reverse(); // inverte a primeira posição do do array pela última e etc...
    let invertedText = invertedLetters.join(""); // junta os elementos de um arry e transforma em string
    return invertedText;
}
}