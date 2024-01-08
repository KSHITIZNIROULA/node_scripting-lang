let stringsArray = ["apple", "banana", "cherry","mango"]
console.log("Original array:", stringsArray)

let removedElement = stringsArray.shift()
console.log(`Removed element :${removedElement}`)
console.log("Array after removing the first element:", stringsArray)

let newString = "avocado"
stringsArray.unshift(newString)
console.log("Array after adding a new string to the beginning:", stringsArray)
