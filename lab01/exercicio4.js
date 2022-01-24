var f2 = 0;
var f1 = 1;
var count = 0
var swap
function fibonacci(num){
  for(i = 0; i < num; i++) {

    swap = f2 + f1;
    f1= f2;
    f2= swap;
    count++;
    
    console.log(swap);
}
}


fibonacci(100)