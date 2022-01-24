function eprimo(numero) {
    for (let divisor = 2; divisor <= Math.sqrt(numero); divisor++) {
      if (numero % divisor == 0) {
        return false;
      }
    }
  
    return true;
  }
  
  function imprimePrimos(inicio, fim) {
    for (let count = inicio; count <= fim; count++) {
      if (eprimo(count)){
        
        console.log(count);
      } 
    }
  }
  
  imprimePrimos(2, 1000);
  