
const pessoas = [

  { name: "Fabiana Araújo", age: 33 },
  { name: "Gabriel Gomes", age: 25 },
  { name: "Fernando Henrique", age: 17 },
  { name: "Ana Luiza", age: 2 },
  { name: "Geralda do Nascimento", age: 93 },
  { name: "Miguel Souza", age: 70 },
  { name: "Antonio Miguel", age: 69 }

]

 const average = (arr) => {
  let count = 0
  arr.forEach(({age}) => {
    
    count += age
    
  });

  return Math.round(count / arr.length)
 
}
console.log(average(pessoas))