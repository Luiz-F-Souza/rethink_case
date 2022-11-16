
const pessoas = [

  { name: "Fabiana Araújo", age: 33 },
  { name: "Gabriel Gomes", age: 25 },
  { name: "Fernando Henrique", age: 17 },
  { name: "Ana Luiza", age: 2 },
  { name: "Geralda do Nascimento", age: 93 },
  { name: "Miguel Souza", age: 70 },
  { name: "Antonio Miguel", age: 69 }

]

let firstNames
function getFirstNames(arr){

  const names = pessoas.map(p => p.name.match(/[^ ]+/gi)[0])
  

  firstNames = names

}

getFirstNames(pessoas)
console.log(firstNames)