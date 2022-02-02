window.onload = function () { 
    
  
  
    const bttn9 = document.getElementById("bttn9") ? document.getElementById("bttn9") : '';
    
    
    const entrada = document.getElementById("entrada") ? document.getElementById("entrada") : '';
    const resultado = document.getElementById("resultado") ? document.getElementById("resultado") : '';

   

    
    const inputTextoarea = document.getElementById("inputTextoarea") ? document.getElementById("inputTextoarea") : '';

    

    if(bttn9 != '')
    {
        bttn9.addEventListener("click", function() {
            let textresultado = classificaTexto(inputTextoarea.value);

            
            resultado.innerHTML = `resultado: ${textresultado.msg}`;
            resultado.style.border = `1px solid ${textresultado.color}`;
            resultado.style.color = textresultado.color;
        });
    }

   

   

   

   
    
    function classificaTexto(text)
    {
        if(contemNumero(text) && verificaCaractere(text) && 
           verificaCaractere(text, "uppercase") && verificaCaracteresEspeciais(text))
            return {msg: "Forte", color: "green"}
        else if(contemNumero(text) && verificaCaractere(text) && verificaCaractere(text, "uppercase"))
            return {msg: "Moderado", color: "yellow"}
        else if(text == text.toLowerCase() || text == text.toUpperCase())
            return {msg: "Fraco", color: "red"}
        else 
            return {msg: "Fraco", color : "red"}
    }

    
    function contemNumero(text)
    {
        for(let i = 0; i < text.length; i++)
            if(!isNaN(text.charAt(i)) && text.charAt(i) != " ")
                return true;
    }

   
    function verificaCaractere(text, typeCase = "smallcase")
    {
        if (typeCase == "uppercase")
            for(let i = 0; i < text.length; i++)
                if(text.charAt(i) >= 'a' && text.charAt(i) <= 'z')
                    return true;
        if (typeCase == "smallcase")
            for(let i = 0; i < text.length; i++)
                if(text.charAt(i) >= 'a' && text.charAt(i) <= 'z')
                    return true;
    }

    
    function verificaCaracteresEspeciais(text)
    {
        
        const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        return specialChars.test(text);
    }

    
}   
    
