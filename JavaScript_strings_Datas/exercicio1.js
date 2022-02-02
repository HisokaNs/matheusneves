window.onload = function () { 

const bttn1 = document.getElementById("bttn1") ? document.getElementById("bttn1") : '';
const entrada = document.getElementById("entrada") ? document.getElementById("entrada") : '';
const resultado = document.getElementById("resultado") ? document.getElementById("resultado") : '';


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
    let letters = text.split("");
    let invertedLetters = letters.reverse(); 
    let invertedText = invertedLetters.join(""); 
    return invertedText;
}
}