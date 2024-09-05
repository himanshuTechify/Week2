//promises
const myPromise = new Promise( (resolve, reject) => {

    const sucess = true;
    if(sucess){
        resolve("sucessfully solved")
    }else{
        reject("rejected sucessfully")
    }
})

myPromise
    .then( message => console.log(message))
    .catch ( error => console.log(error))
    .finally( () => {
        console.log("promise is settled")
    })


// call Stack
const bar = () => console.log('bar')

const baz = () => console.log('baz')

const foo = () => {
  console.log('foo')
  setTimeout(bar, 0)
  baz()
}

foo()
