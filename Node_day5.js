var express = require('express')

const app = express();

// routing
app.get('/', () => {
    console.log("get req has callled")
})


app.listen( 8000, () => {
    console.log("server has started")
})