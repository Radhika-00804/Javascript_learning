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

// console.log(JsUser.email)
// console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello JS User")
}

console.log(JsUser.greeting)