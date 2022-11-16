
const pessoas = [

  { name: "Fabiana Araújo", age: 33 },
  { name: "Gabriel Gomes", age: 25 },
  { name: "Fernando Henrique", age: 17 },
  { name: "Ana Luiza", age: 2 },
  { name: "Geralda do Nascimento", age: 93 },
  { name: "Miguel Souza", age: 70 },
  { name: "Antonio Miguel", age: 69 }

]

// -----------------------------------------------------------------------------
// Destructuring
// -----------------------------------------------------------------------------

const [pessoa1, pessoa2, pessoa3, , , , pessoa4] = pessoas
  // console.log(pessoa1, pessoa2, pessoa3, pessoa4, "DESTRUCTURING")

// -----------------------------------------------------------------------------
// Spread operator
// -----------------------------------------------------------------------------

const pessoasCopia = [...pessoas]
  // console.log(pessoasCopia, "SPREAD OPERATOR")


// -----------------------------------------------------------------------------
// Loops 
// -----------------------------------------------------------------------------

  // MAP
    const pessoasMap = pessoas.map((pessoa,index) => {

      const {name, age} = pessoa

      return `${name} de ${age} anos terminou em ${index + 1} na competição.`
    })
      // console.log(pessoasMap, "MAP")



    // FILTER
      const pessoasFilter = pessoas.filter(pessoa => {
        return pessoa.age >= 65
      })
      // console.log(pessoasFilter, "FILTER")


    // FOR EACH
        let bolosSobrando = 20
      pessoas.forEach(pessoa => {

        // console.log(`${pessoa.name} comeu 1 bolo`, "FOREACH")
        bolosSobrando--
      })
      // console.log(`${bolosSobrando} ${bolosSobrando > 1 ? "bolos" : "bolo"} sobrando`,"FOREACH - SIDE EFFECTS")



// -----------------------------------------------------------------------------
// Add or remove items
// -----------------------------------------------------------------------------

    // PUSH
      pessoasCopia.push({name: "Luiz Felipe de Souza Barbosa", age: 24})
      // console.log(pessoasCopia, "PUSH")
  


    // SLICE
     const pessoasSlice =  pessoasCopia.slice(0,4)
      // console.log(pessoasSlice,"SLICE")
      


      // SPLICE
      
       pessoasCopia.splice(3,1,{name:"Joana Oliveira", age:87})
      //  console.log(pessoasCopia, "SPLICE")
      


      // POP

      pessoasCopia.pop()
      // console.log(pessoasCopia, "POP")


      
      // UNSHIFT

      pessoasCopia.unshift({name:"Luiz Felipe de Souza Barbosa", age: 24})
      // console.log(pessoasCopia, "UNSHIFT")

// -----------------------------------------------------------------------------
// JOIN

        const pessoasJoin = pessoasCopia.map(p => {
          return p.name
        }).join(' -- ')
       
        // console.log(pessoasJoin, "JOIN")

// -----------------------------------------------------------------------------
// SOME

        pessoasCopia.some(pessoa => {
          
          if(pessoa.name === "Geralda do Nascimento"){
            // console.log('pessoa encontrada', "SOME")
            return true
          }
          // console.log("pessoa ainda não encontrada", "SOME")

        })

// -----------------------------------------------------------------------------
// SORT
          pessoasCopia.sort((a, b) => a.name.localeCompare(b.name))
        console.log(pessoasCopia)