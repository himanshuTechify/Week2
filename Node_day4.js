var fs = require('fs')

const data = fs.readFileSync('./example.txt', 'utf-8')
console.log(data)
console.log("file reading is complete")

fs.appendFileSync('./example.txt',"hellow world",'utf-8')
const data2 = fs.readFileSync('./example.txt', 'utf-8')
console.log(data2)
console.log("file updation is complete")