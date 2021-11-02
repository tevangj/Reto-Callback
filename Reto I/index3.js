function elCallback(callback){
    num1 = 80;
    num2 = 56;
    callback(num1,num2);
}

function suma(num1,num2){
    console.log (num1 + num2);
 }

 function resta(num1,num2){
   console.log(num1 - num2);
 }

 function division(num1,num2){
   console.log (num1 / num2);
 }

 function multiplicacion(num1,num2){
   console.log (num1 * num2);
 }

 elCallback(suma);
 elCallback(resta);
 elCallback(division);
 elCallback(multiplicacion);