const myArr = [10,20,30,40,50]
// console.log(myArr)
// console.log(myArr[0])

// /* shallow copy - share the same references as those of the source
//                   object from which the copy was made (changes made into original copy)*/

// /* deep copy - do not share the same references as those of the source
//                   object from which the copy was made (changes made into copy not in original one)*/
// myArr.push(3)
// console.log(myArr)

// myArr.unshift(0)
// // console.log(myArr)
// myArr.shift()
// console.log(myArr)

// console.log(myArr.includes(10))
// console.log(myArr.indexOf(10))

// const newArr = myArr.join()    // convert the type from array to string 
// console.log(newArr)

// console.log(myArr.slice(1,3))  //-- slice do not change the original array 
// console.log(myArr)

// console.log(myArr.splice(1,3))  // -- splice change the whole array and cut the part on which splice used
// console.log(myArr)

///////////////////////////////////////////////////////

const marvel_heroes = ["thor", "ironman", "captain america"]
const dc_heroes = ["superman", "batman", "flash"]

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes)

// console.log(marvel_heroes.concat(dc_heroes))
// console.log(marvel_heroes);

// const myHero = [...marvel_heroes, ...dc_heroes]
// console.log(myHero)

// const newArr = [1,3,4,[7,8,9],10,11]
// console.log(newArr.flat(Infinity))

console.log(Array.isArray("Radhika"))
console.log(Array.from("Radhika"))
