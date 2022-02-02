window.onload = function () {
    
    const bttn7 = document.getElementById("bttn7") ? document.getElementById("bttn7") : '';
    
    const entrada = document.getElementById("entrada") ? document.getElementById("entrada") : '';
    const resultado = document.getElementById("resultado") ? document.getElementById("resultado") : '';   

    const inputDate1 = document.getElementById("inputDate1") ? document.getElementById("inputDate1") : '';
    const inputDate2 = document.getElementById("inputDate2") ? document.getElementById("inputDate2") : '';

    if(bttn7 != '')
    {
        bttn7.addEventListener("click", function() {
            entrada.innerHTML = "Entrada: " + dataFormatoBR(inputDate1.value);
            resultado.innerHTML = "resultado: " + dataPorExtenso(inputDate1.value);
        });
    }
    function dataFormatoBR(date)
    {
        let dateSplited = date.split("-");
        let day = dateSplited[2];
        let month = dateSplited[1];
        let year = dateSplited[0];
        return day + "/" + month + "/" + year;
    }

    
   function dataPorExtenso(date)
   {
       let dateSplited = date.split("-"); 
       let day = dateSplited[2];
       let month = dateSplited[1];
       let year = dateSplited[0];

       switch (month) {
           case '01':
               return `${day} de janeiro de ${year}`;
               break;
           case '02':
               return `${day} de fevereiro de ${year}`;
               break;
           case '02':
               return `${day} de março de ${year}`;
               break;
           case '04':
               return `${day} de abril de ${year}`;
               break;
           case '05':
               return `${day} de maio de ${year}`;
               break;
           case '06':
               return `${day} de junho de ${year}`;
               break;
           case '07':
               return `${day} de julho de ${year}`;
               break;
           case '08':
               return `${day} de agosto de ${year}`;
               break;
           case '09':
               return `${day} de setembro de ${year}`;
               break;
           case '10':
               return `${day} de outubro de ${year}`;
               break;
           case '11':
               return `${day} de novembro de ${year}`;
               break;
           case '12':
               return `${day} de dezembro de ${year}`;
               break;                                
           default:
               return "mês inválido";
               break;
       }
   }











}