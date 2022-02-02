window.onload = function () { 
    
   
  
    const bttn10 = document.getElementById("bttn10") ? document.getElementById("bttn10") : '';

   
    const entrada = document.getElementById("entrada") ? document.getElementById("entrada") : '';
    const resultado = document.getElementById("resultado") ? document.getElementById("resultado") : '';

  
    if(bttn10 != '')
    {
        bttn10.addEventListener("click", function() {
            entrada.innerHTML = "Entrada: " + inputTexto.value;
            resultado.innerHTML = "resultado: " + aplicaCriptografiaTenisPolar(inputTexto.value);
        });
    }

 
    

   
    function aplicaCriptografiaTenisPolar(text)
    {
        let encryptedMessage = "";
        let Letras = text.split(""); 
        Letras.map(letra => {
            encryptedMessage += criptografiaTenisPolar(letra);
        });
        return encryptedMessage;
    }

    
    function criptografiaTenisPolar(letra)
    {
        switch (letra) {
            case 't' || 'T':
                if(letra == 't')
                    return 'p';
                return 'P';
            case 'p' || 'P':
                if(letra == 'p')
                    return 't';
                return 'T';
            case 'e' || 'E':
                if(letra == 'e')
                    return 'o';
                return 'O';
            case 'o' || 'O':
                if(letra == 'o')
                    return 'e';
                return 'E'
            case 'n' || 'N':
                if(letra == 'n')
                    return 'l';
                return 'L';
            case 'l' || 'L':
                if(letra == 'l')
                    return 'n';
                return 'N';
            case 'i' || 'I':
                if(letra == 'i')
                    return 'a';
                return 'A';
            case 'a' || 'A':
                if(letra == 'a')
                    return 'i';
                return 'I';
            case 's' || 'S':
                if(letra == 's')
                    return 'r';
                return 'R';
            case 'r' || 'R':
                if(letra == 'r')
                    return 's';
                return 'S';
            default:
                return letra;
        }
    }
}