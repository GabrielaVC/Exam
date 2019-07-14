// EJERCICIO 1
/*
let numeros = [3,4,5];

numeros.forEach(item =>{ //Muestra cada uno de los valores
  console.log(item*3);   //Dentro dél arreglo
});

let numeros = [3,4,5];
const listanumeros = numeros.map(item =>{ //se agrega una s a cada elemento de la lista
  return item*3; //Teample string 
});

console.log(listanumeros)
*/

function tripleDown(numeros){
  const listanum = numeros.map(item =>{ 
    return item*3; 
  });
  console.log(listanum);
  }
  
console.log(tripleDown([3,4,5])); //[9, 12, 15]

//EJERCICIO 2 -----------------------------------------------------------------------------

function evalPerson(currentYear,person){ //currentYear(numero), persona(name,age,location)
  const properson = person;  
  //console.log(person); 

  person.ageofBirthday = this.currentYear - Number(this.age);
  //console.log(person);

  console.log(person.name);
}

console.log(evalPerson(2019,{name:"Wences", age:"23", location:"Mexico"}))
//{name"Wences", ageofBirthday: 1987, location: "Mexico", imigrant: false}

console.log(evalPerson(2019,{name:"Casey", age:"30", location:"USA"}))
//{name"Casey", ageofBirthday: 1989, location: "USA", imigrant: true}


//EJERCICIO 3 -----------------------------------------------------------------------------
function filterAndSum(lista,target){ //lista(array), target(numero) 
  const listaFiltrada = lista.filter(item =>{
    if (item !==target){
      return true;
    }
    else{
      return false;
    }
  });
console.log(listaFiltrada);
}

const lista = [1,2,3,4,5];
console.log(filterAndSum(lista,3)) //[1,2,4,5]
console.log(lista) //[1,2,3,4,5]

//punto extra
/*
function sum (lista){
    var acum = 0;
    for (var i = lista[0]; i<=lista.length; i++){
      acum = acum + i;
    }
    return acum;
    console.log(acum)
  }
}
*/ 

const lista = [1,2,3,4,5];
console.log(filterAndSum(lista,3)) //{filtereNumber: [1,2,3,4,5], sumOfNumbers : 6}
console.log(lista) //[1,2,3,4,5]

//EJERCICIO 4 -----------------------------------------------------------------------------
function generateHTML(cat) { //cat(objeto), devolver una cadana html 

}

const cat = {name: "wiskas", breed: "peluche", gender: "male"}
console.log(generateHTML(cat));
//<div class="peluche">
//<h3>Wiskas </h3>
//</div>*/
