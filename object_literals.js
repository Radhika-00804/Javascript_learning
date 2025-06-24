const mySym = Symbol("Key1")

const JsUser = {
    name: "Radhika",
    email : "radhikagupta36708@gmail.com",
    password : 12345,
    [mySym]: "myKey"
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(typeof JsUser[mySym])

// JsUser.email = "pihu2312@gmail.com"
// // Object.freeze(JsUser)

//  

// console.log(JsUser.greeting)
///////////////////////////////////////////////////

// const gptUser = new Object()
const gptUser = {}

gptUser.id = "radhe"
gptUser.name = "Radhika"

// console.log(gptUser)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign(obj1, obj2) // if we use this it is in the form target,source so we use this below format
// const obj3 = Object.assign({},obj1, obj2)
// const obj3 = {...obj1, ...obj2}
// console.log(obj3)
// console.log(obj1)
console.log(Object.keys(gptUser))
console.log(Object.values(gptUser))
console.log(Object.entries(gptUser))

console.log(gptUser.hasOwnProperty('id'))