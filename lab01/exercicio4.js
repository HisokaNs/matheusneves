function ePar(numero) {
    for (let divisor = 2; divisor <= Math.sqrt(numero); divisor++) {
        if (numero % divisor == 0) {
            return true;
        }

    }
    return false;
}
function positivos(numero){
        for(let numero; numero>=0; numero++){
            return true;
        }
return false;

}

function Soma(inicio, fim) {
    for (let i = inicio; i <= fim; i= i+i) {
        if (ePar(i)); (positivos(i));
    }
    return i++
}

roma(0, 10);
