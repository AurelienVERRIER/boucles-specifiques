// 01 - Map Double

// const array = [1, 2, 3, 4, 5]

// const double = array.map((array, i) => {
//   return array = array * 2
// })

// console.log(double)


// 02 - Map Names

// const longNames = [{firstName: "Bond", lastName:"James Bond"},{firstName: "Roger", lastName: "Rabbit"}]

// const shortNames = longNames.map((longNames, i) => {
//   return name =`${longNames.firstName} ${longNames.lastName}`

 
// })
// console.log(longNames)
// console.log(shortNames)


// 03 - Filter Numbers

// const array = [1, "toto", 34, "javascript", 8]

// const numbers = array.filter((array, i) => {
//   return Number(array)
//   // Ou return parseInt(array)
// })
// console.log(numbers)


// 04 - Filter Even

// const numbers = [1,2,3,4,5,6,7,8]

// const even = numbers.filter((numbers, i) => {
//   return numbers % 2 === 0
// })

// console.log(even)


// 05 - Cakes


// const cakes = [
// 	{
// 		name: "cake",
// 		flavor: "vanilla",
// 		status: "available"
// 	},
// 	{
// 		name: "brownie",
// 		flavor: "chocolate",
// 		status: "available"
// 	},
// 	{
// 		name: "pie",
// 		flavor: "strawberry",
// 		status: "available"
// 	},
// 	{
// 		name: "muffin",
// 		flavor: "pistachio",
// 		status: "available"
// 	},
// 	{
// 		name: "donut",
// 		flavor: "chocolate",
// 		status: "available"
// 	},
// ]

// console.log(cakes)

// const chocolates = cakes.filter((cakes, i) => {
//   return cakes.flavor === "chocolate"
//   }
// )

// console.log(chocolates)


// const soldOut = chocolates.map((chocolate, i) => {
  
//   chocolate.status = "Sold Out"
//   return chocolate

  // return {
  //   name: chocolate.name,
  //   flavor: chocolate.flavor,
  //   status: "Sold Out"
  // }
// })


// console.log(soldOut)

// // 06 - 

// const pie = cakes.find((cake, i) => {
//   return cake.name === "pie"
// })

// console.log(pie)


// 07 - Factorielle forEach




// listeFactiorelleDe9.forEach(listeFactiorelleDe9, i) => {

// }

// let number = 2

// let expo = 9


// const numbersList = expo.forEach((numbers, i) => {
//   numbers = [i+1]
//   console.log(numbersList)
// })

// const factiorelleDe9 = numbers.forEach((number, i) => {
//   number = number * number
// console.log(number)
// })

// console.log(factiorelleDe9)

// [1, 2, 3, 4, 5, 6, 7, 8, 9]



// 08 - Chess board


const ligneImpaire =["b", "w", "b", "w", "b", "w", "b", "w"]
 

// const plateauImpair = ligneImpaire.forEach((ligneImpaire, i) => {
const plateauImpair = ligneImpaire.map((ligneImpaire, i) => {
  if (ligneImpaire === "b") {
    return ligneImpaire = `[ ]`
  } else {
    return ligneImpaire = `[x]`
  }
})

console.log(plateauImpair)


const lignePaire =["w", "b", "w", "b", "w", "b", "w", "b"]

const plateauPair = lignePaire.map((lignePaire, i) => {
  if (lignePaire === "b") {
    return lignePaire = `[ ]`
  } else {
    return lignePaire = `[x]`
  }
})

console.log(plateauPair)


// const plateauImpair = ligneImpaire.map((letter, i) => {
//   letter = ["X"]
// })
// console.log(plateauImpair)


// 09 - Exercice 3 bis


// const tableauOrigine = [12, 55, "hello", true, { isStudent: false }, 3]

// const filtre = tableauOrigine.filter((tableauOrigine, i) => {
//   return parseInt(tableauOrigine)    
//   })

//   console.log(filtre)

  