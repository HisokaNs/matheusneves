window.onload = function () { 

    const bttn2 = document.getElementById("bttn2") ? document.getElementById("bttn2") : '';
    
    const entrada = document.getElementById("entrada") ? document.getElementById("entrada") : '';
    const resultado = document.getElementById("resultado") ? document.getElementById("resultado") : '';
    

    const inputTexto = document.getElementById("inputTexto") ? document.getElementById("inputTexto") : '';
    if(bttn2 != '')
    {
        bttn2.addEventListener("click", function() {
            entrada.innerHTML = "Entrada: " + inputTexto.value;
            resultado.innerHTML = "resultado: " + marcaVogais(inputTexto.value);
        });
    }
    function marcaVogais(text) {
        let Negrito = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
        let Letras = text.split("");

        let vNegrito = Letras.map( function (letra) { 
            if(Negrito.includes(letra)) 
                return `<b>${letra}</b>`; 
            return letra;
        });

        return vNegrito.join(""); 
    }
}
