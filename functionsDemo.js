let string = "Hello, "
let boolean = true
let number = 42
let zero = 0
let falseString = ""

console.log(string + number)
console.log("=====================")
console.log(number, "Line 7")
console.log(String(number))
console.log(boolean, typeof boolean)
console.log(number, typeof number)
console.log(typeof [3,4,5])
console.log("=====================")

if(zero === 0){
    console.log("Zero is false")
}

if(!zero){
    console.log("Zero is true")
} else {
    console.log("Zero is false")
}

if(falseString){
    console.log("This string contains", falseString)
} else{
    console.log("This string is empty")
}

console.log("===================")
console.log(!false)
console.log(Boolean(!zero))
console.log(Boolean(zero))
console.log("===================")

let helloWorld = "Hello, World!"
// helloWorld = helloWorld.toLowerCase()

if(helloWorld.toLowerCase("hello")){
    console.log("Hello, World! contains 'hello'")
} else {
    console.log("Hello, World! does not caontain 'hello'")
}

let fruits = ['Apples','Bananas','Cherries']

let abcString =`The ABCs of fruit are ${fruits.join(', ').toLowerCase()}`

let noMoreCherries = abcString.split(',')

noMoreCherries.pop()

noMoreCherries = noMoreCherries.join(', and').replace("C", "")
console.log(noMoreCherries)

console.log("==========================")

const madLib = (string,array) => {
    for(let i = 0; i < array.length; i++){
        let randomInt = Math.floor(Math.random() * array.length)
    string = string.replace("X", array[randomInt])
    if(!string.includes('X')){
        break;
    }
    }
    return string
}

let sampleOne = "The X, X fox jumped over the X, X fence."
let arrayOne = ['quick','brown','tall','black','red','slow','green','stinky','intrepid','silly','nondescript']

let newSentence = madLib(sampleOne,arrayOne)
console.log(newSentence)

