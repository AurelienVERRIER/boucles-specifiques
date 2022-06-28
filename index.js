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

const array = [1, "toto", 34, "javascript", 8]

const numbers = array.filter((array, i) => {
  return Number(array)
  // Ou return parseInt(array)
})
console.log(numbers)