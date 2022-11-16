
const pessoas = [

  { name: "Fabiana Araújo", age: 33 },
  { name: "Gabriel Gomes", age: 25 },
  { name: "Fernando Henrique", age: 17 },
  { name: "Ana Luiza", age: 2 },
  { name: "Geralda do Nascimento", age: 93 },
  { name: "Miguel Souza", age: 70 },
  { name: "Antonio Miguel", age: 69 }

]

function gettingPerson(name){
  
 let person
  
 pessoas.some(item => {
    if(item.name === name){
      person = item
      return true
    } 
  })

  return person
}

console.log(gettingPerson("Gabriel Gomes"))