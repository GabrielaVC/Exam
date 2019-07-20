// EJERCICIO 1
/*
Declara una función oddIn que acepte como parámetro numbers (array), y regrese el valor
de la suma de los números nones en ese array. (2 pts)
*/

function oddIn(numbers){
    
}

console.log(oddIn([1,2,3,4,5])); // 9

//EJERCICIO 2 -----------------------------------------------------------------------------
/*
Declara una función powerUp que acepte como parámetro numbers(array), y regresa un nuevo 
array del mismo tamaño con cada valor elevado a la 3a potencia.(3 pts)
*/

function powerUp(numbers){
    return numbers.map(number => {
      return Math.pow(number,3);
    })
}

console.log(powerUp([3,4,5])); // [27,64,125]

//EJERCICIO 3 -----------------------------------------------------------------------------
/* 
Define una función partialMiddleFinal que recibe un parametro numbers(array), la función 
debe regresar un objeto con tres propiedades: 
- quarter: (si la longitud es multiplo de dos) regresa el último número del primer cuarto 
  del array o third (si la longitud es multiplo de tres) regresa el último número del
  primer tercio del array.
- middle: si es par el último número de la primer mitad del array o si es non el número a 
  la mitad del array
- final: el número al final del array.(4 pts)
Punto extra: Si la función evalua quarter y third.
*/

// ---- MIDDLE ---- //
/*
function middle(lista){
  let mitad;
  if(lista.length % 2 === 0){ //numero par
    mitad = (lista.length/2)-1;
  }
  else{ //numero inpar
    mitad = (lista.length/2)-0.5;
  }
  return lista[mitad];
}
console.log(middle(lista));

*/

// ---- FINAL --- //
/*
----Opción 1----
function final(lista){
  const numFinal = lista[lista.length-1];
  return numFinal;
}

console.log(final(lista));

----Opción 2----
function final(lista){
  const numFinal = lista.pop(); 
  return numFinal;
}

console.log(final(lista));

*/

function partialMiddleFinal(){
    function middle(lista){
    let mitad;
      if(lista.length % 2 === 0){ //numero par
        mitad = (lista.length/2)-1;
      }
      else{ //numero inpar
      mitad = (lista.length/2)-0.5;
    }
    return lista[mitad];
  }
  
    function final(lista){
      const numFinal = lista.pop(); 
      return numFinal;
    }
      
    return {middle: middle(lista),final: final(lista)}
  }

const lista = [1,2,3,4,5,6,7,8]; 
console.log(partialMiddleFinal(lista)) //{quarter: 2, middle: 4, final: 8};

const lista = [1,2,3,4,5,6,7,8,9]; 
console.log(partialMiddleFinal(lista)) //{third: 3, middle: 5, final: 9}

//EJERCICIO 4 -----------------------------------------------------------------------------

/*
Define una funcion llamada decrypt que recibe un parámetro: phrase(string), esta función 
debe regresar la frase resultante de las siguientes reglas:
- Cada una de las palabras en la frase va a regresar una letra o un espacio.
- Si la letra comienza con una vocal, regresa la letra que le corresponde a la vocal en el 
  objeto codex.
- Si la frase no comienza con una vocal regresa un espacio. (5 pts)
keep it dry Ejemplo: palabra: alardear, letra: l
*/

function name(){
  
}

const codex = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5
  }
  console.log(decrypt('aksdqw esedqw ewedqw iqwpaq rxceft oimnie atpmkj qweris uoiuyd eertgr ayñoik'));
  
