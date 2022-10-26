const myName="Mar"
let myAge=17
let x = "Frutas"
let y= "Verduras"
var likeMusic= true
console.log(typeof myName)
console.log(typeof myAge)
console.log(typeof x)
console.log(typeof y)
console.log(typeof likeMusic)

let global = "hola soy la variable global";

const  blockFunction = ()  => {
  let funcVariable = "hola soy la variable de funcion";

  if (1 === 1) {
    let blockVariable = "hola soy la variable de bloque";
    console.log("scope de bloque");
    console.log(global);
    console.log(funcVariable);
    console.log(blockVariable);

  }
  //console.log("scope de funcion");
  //console.log(global);
  //console.log(funcVariable);  
  //console.log(blockVariable)

}

blockFunction();

//console.log("scope global");
//console.log(global);
//console.log(funcVariable)

