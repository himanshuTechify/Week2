// chaining promises

// const status = response => {
//     if (response.status >= 200 && response.status < 300) {
//       return Promise.resolve(response)
//     }
//     return Promise.reject(new Error(response.statusText))
//   }

//   const json = response => response.json()

//   fetch('/todos.json')
//     .then(status)
//     .then(json)
//     .then(data => {
//       console.log('Request succeeded with JSON response', data)
//     })
//     .catch(error => {
//       console.log('Request failed', error)
//     })


new Promise((resolve, reject) => {
  reject("Error");
}).catch((err) => {
  console.error(err);
});


//Promises race 
const promiseOne = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'one')
  })
  const promiseTwo = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'two')
  })
  
  Promise.race([promiseOne, promiseTwo]).then(result => {
    console.log(result) // 'two'
  })


var http = require('http')

http.createServer( function(req,res) {
    res.writeHead( 200, { 'Content-Type' : 'Text/html'})
    res.write('hellow');
    res.end();
}).listen(8080)
