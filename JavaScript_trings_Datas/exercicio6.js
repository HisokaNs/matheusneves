window.onload = function () { 
    
    
   
    const bttn6 = document.getElementById("bttn6") ? document.getElementById("bttn6") : '';
    

    
    const entrada = document.getElementById("entrada") ? document.getElementById("entrada") : '';
    const resultado = document.getElementById("resultado") ? document.getElementById("resultado") : '';

    
    
    const inputDate1 = document.getElementById("inputDate1") ? document.getElementById("inputDate1") : '';
    const inputDate2 = document.getElementById("inputDate2") ? document.getElementById("inputDate2") : '';

  

    if(bttn6 != '')
    {
        bttn6.addEventListener("click", function() {
            entrada.innerHTML = "Entrada: " + inputDate1.value;
            
            if(diasDeVida(inputDate1.value))
                resultado.innerHTML = `resultado: ${diasDeVida(inputDate1.value)} dia(s).`;
            else
                resultado.innerHTML = "resultado: Data inválida!";
        });
    }

  
    

    function subistituiTexto(text, wordTosearch, newWord)
    {
        return text.replaceAll(wordTosearch, newWord); 
    }

    

    
    function diasDeVida(date)
    {
        const oneDay = 1000 * 60 * 60 * 24; 
        let birth = subistituiTexto(date, '-', '/'); 
        
        
        birth = new Date(birth); 
        let dateNow = new Date(dataAtual());

        
        birth = birth.getTime(); 
        dateNow = dateNow.getTime();

        
        let diference = dateNow - birth;

        if(diference < 0)
            return false;
        else
            return diference / oneDay; 
        
    }

    
    function dataAtual(format = 'eua'){
        let dateNow = new Date(),
            day  = dateNow.getDate().toString(),
            dayFormated = (day.length == 1) ? '0' + day : day,
            month  = (dateNow.getMonth()+1).toString(),
            monthFormated = (month.length == 1) ? '0' + month : month,
            yearFormated = dateNow.getFullYear();

        
        if(format == 'br' || format == 'BR')
            return (dayFormated  + "/" + monthFormated + "/"+ yearFormated);
        else
            return (yearFormated  + "/" + monthFormated + "/"+ dayFormated);
    }

   
}