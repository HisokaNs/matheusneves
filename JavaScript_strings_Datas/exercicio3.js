window.onload = function () { 

    const bttn2 = document.getElementById("bttn2") ? document.getElementById("bttn2") : '';
    
    const entrada = document.getElementById("entrada") ? document.getElementById("entrada") : '';
    const resultado = document.getElementById("resultado") ? document.getElementById("resultado") : '';
    const inputTexto = document.getElementById("inputTexto") ? document.getElementById("inputTexto") : '';
    
    
    
    if(bttn2 != '')
    {
        bttn2.addEventListener("click", function() {
            entrada.innerHTML = "Entrada: " + inputTexto.value;
            resultado.innerHTML = "resultado: ";
            let data = palavrasMaisUsadas(inputTexto.value);
            montaTabela(data, resultado);
        });
    }
    function transformaEmPalavras(text)
    {
        
        let words = text.toLowerCase().replace(/[.,]\s/g, " ");
        return words.split(" "); 
    }
    function palavrasMaisUsadas(text) {
        let words = transformaEmPalavras(text);
        
       
        let repeatedWords = { words: [], counts: [] }; 
        
        words.forEach(word => {
            let count = 0;

            for(let i = 0; i < words.length; i++)
            
                if(words[i] == word && !words[i].includes(" ")) 
                    count++;

                
                if(count > 0 && !repeatedWords.words.includes(word)) 
                {
                    repeatedWords.words.push(word);
                    repeatedWords.counts.push(count);
                }
        });

        return repeatedWords;
    }
    function montaTabela(obj, docElement)
    {
        
        let table = document.createElement("table");
        let thead = document.createElement("thead");
        let tbody = document.createElement("tbody");
        
        
        let row1 = document.createElement("tr");
        let heading1 = document.createElement("th");
        let heading2 = document.createElement("th");
        heading1.innerHTML = "Palavras";
        heading2.innerHTML = "Número de repetições";

       
        row1.appendChild(heading1);
        row1.appendChild(heading2);
        thead.appendChild(row1);

        
        for(let i = 0; i < obj.words.length; i++)
        {
            let tr = document.createElement("tr");
            let td1 = document.createElement("td");
            let td2 = document.createElement("td");
            
            
            td1.innerHTML = obj.words[i];
            td2.innerHTML = obj.counts[i];
            tr.appendChild(td1);
            tr.appendChild(td2);
            tbody.appendChild(tr);
        }

       
        table.appendChild(thead);
        table.appendChild(tbody);

       
        docElement.appendChild(table);
    }
}