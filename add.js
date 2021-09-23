//muliticar dos numeros sin usar el signo de multiplicacion


/*const multiply = (a, b)=> {
let resultado = 0
const positivo = Math.abs(b) == b
for (i = 0 ; i < Math.abs(b); i++){
    resultado = positivo ? resultado + a : resultado -a
}
return resultado

}

const a = multiply(3, 5)
console.log(a)*/


//hacer un array que cuente del 1 al 100
/*function conteode1a100() {
    for (a = 1; a <= 100; a++){
        console.log(a)
    } 
}
conteode1a100()*/

//Escribe un algoritmo que: imprima los numeros del 1 al 100, con la condicion que si 
/*el numero a imprimir es multiplo de 3, imprima el string 'fizz', si el numero es multiplo
 de 5 imprimir ; 'buzz, y si es multiplo de ambos imprima: 'fizzBuzz*/
//resolucion 1
 /*function FizzBuzz(){
     for( let a = 1; a<=100; a++){
         if( a % 3 ===0 && a % 5===0 ){
             console.log("FizzBuzz")
         }else if(a % 3 ===0){
             console.log('fizz')
         }else if(a % 5 ===0){
             console.log('buzz')
         }else(
             console.log(a)
         )
     }
 }
FizzBuzz()*/

//resolucion 2
/*
function FizzBuzz(){
    for( let a = 1; a<=100; a++){
        let msj = ''
        if(!(a % 3)) {
            msj += "Fizz"
        }if(!(a % 5)){
            msj +="Buzz"
        }

        console.log(msj||a)
    }
}
FizzBuzz()*/


//obtener el numero mayor de un arreglo solo interando el arreglo una vez
/*
const getBiggest = (arr) => arr.reduce((acc, el ) => acc > el ? acc : el)
const b = getBiggest([1,30,50,40000,-50000,42255566885])
console.log(b)*/
